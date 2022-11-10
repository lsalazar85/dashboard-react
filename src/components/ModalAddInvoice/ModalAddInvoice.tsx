import { useSelector, useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  AddNewInvoiceForm,
  AddNewInvoiceItem,
  AddNewInvoiceItemName,
  AddNewInvoiceSubmit,
} from './styled';

import { Input } from '../ExchangeRate/styles';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';

import { TModalInvoices } from '../../types';

import { modalStateData } from '../../redux/store';
import { setModalState } from '../../redux/slices/modal/modalSlice';
import { setTableState } from '../../redux/slices/table/tableSlice';

const ModalAddInvoice = () => {
  const dispatch = useDispatch();
  const modalStateStore = useSelector(modalStateData);
  const { showModal } = modalStateStore;

  const { register, handleSubmit, reset } = useForm<TModalInvoices>();

  const onSubmit: SubmitHandler<TModalInvoices> = ({
    client,
    paymentStatus,
    cargoStatus,
    date,
    amount,
    typeOfPayment,
    installmentsPayed,
    paymentDueDate,
  }) => {
    dispatch(
      setTableState({
        client,
        paymentStatus,
        cargoStatus,
        date,
        amount,
        typeOfPayment,
        installmentsPayed,
        paymentDueDate,
      }),
    );

    dispatch(
      setModalState({
        showModal: false,
      }),
    );
    reset();
  };

  const closeModal = () => {
    dispatch(
      setModalState({
        showModal: false,
      }),
    );
  };

  return (
    <Modal
      visible={showModal}
      title="Add New Invoice"
      onClose={() => closeModal()}
      hideCloseIcon
    >
      <AddNewInvoiceForm onSubmit={handleSubmit(onSubmit)}>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Client</AddNewInvoiceItemName>
          <Input type="text" {...register('client', { required: true })} />
        </AddNewInvoiceItem>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Payment Status</AddNewInvoiceItemName>
          <Input
            type="text"
            placeholder="Delivered, Completed, Processing, Missing"
            {...register('paymentStatus', { required: true })}
          />
        </AddNewInvoiceItem>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Cargo Status</AddNewInvoiceItemName>
          <Input
            type="text"
            placeholder="Delivered, Completed, Processing, Missing"
            {...register('cargoStatus', { required: true })}
          />
        </AddNewInvoiceItem>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Date</AddNewInvoiceItemName>
          <Input type="date" {...register('date', { required: true })} />
        </AddNewInvoiceItem>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Amount</AddNewInvoiceItemName>
          <Input type="number" {...register('amount', { required: true })} />
        </AddNewInvoiceItem>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Type of Payment</AddNewInvoiceItemName>
          <Input
            type="text"
            {...register('typeOfPayment', { required: true })}
          />
        </AddNewInvoiceItem>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Installments Payed</AddNewInvoiceItemName>
          <Input
            type="text"
            {...register('installmentsPayed', { required: true })}
          />
        </AddNewInvoiceItem>
        <AddNewInvoiceItem>
          <AddNewInvoiceItemName>Payment Due Date</AddNewInvoiceItemName>
          <Input
            type="date"
            {...register('paymentDueDate', { required: true })}
          />
        </AddNewInvoiceItem>
        <AddNewInvoiceSubmit>
          <Button text="Add" secondary />
        </AddNewInvoiceSubmit>
      </AddNewInvoiceForm>
    </Modal>
  );
};

export default ModalAddInvoice;
