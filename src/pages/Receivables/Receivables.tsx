import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from '../../components/Layout';
import { Search } from '../../components/Search';
import { Table } from '../../components/Table';

import { ModalAddInvoice } from '../../components/ModalAddInvoice';

import { Title } from '../../components/UI/Title';

import { setModalState } from '../../redux/slices/modal/modalSlice';
import { tableStateData } from '../../redux/store';

import {
  ReceivablesWrapper,
  ReceivablesHeader,
  NewInvoiceButton,
} from './styles';

import colors from '../../styles/colors';

import data from '../../data/data.json';
import { ITableItems } from '../../interfaces';

const Receivables = () => {
  const { items: tableItemsValues } = useSelector(tableStateData);

  const [allItems, setAllItems] = useState<ITableItems[]>([]);

  const dispatch = useDispatch();

  const headers = data.headerTable;

  const setNewInvoice = () => {
    setAllItems([]);

    dispatch(
      setModalState({
        showModal: true,
      }),
    );
  };

  const handleSearchFilter = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();

    const searchValue = e.target.value;

    const resultFilter = tableItemsValues.filter(
      (element) => element.client.includes(searchValue)
        || element.paymentStatus.includes(searchValue)
        || element.cargoStatus.includes(searchValue)
        || element.date.includes(searchValue)
        || element.typeOfPayment.includes(searchValue)
        || element.installmentsPayed.includes(searchValue)
        || element.installmentsPayed.includes(searchValue),
    );

    setAllItems(resultFilter);
  };

  return (
    <Layout>
      <ReceivablesWrapper>
        <ReceivablesHeader>
          <Title
            color={colors.Black}
            text="Receivables"
            fontSize="1.625rem"
            fontWeight="700"
          />
          <NewInvoiceButton
            fn={() => setNewInvoice()}
            text="+ New invoice"
            secondary
          />
        </ReceivablesHeader>
        <Search onChange={(e) => handleSearchFilter(e)} />
        <Table headers={headers} tableItems={Object.keys(allItems).length ? allItems : tableItemsValues} />
      </ReceivablesWrapper>
      <ModalAddInvoice />
    </Layout>
  );
};

export default Receivables;
