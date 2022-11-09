import { useState } from 'react';

import { Layout } from '../../components/Layout';
import { Title } from '../../components/UI/Title';
import { Modal } from '../../components/UI/Modal';
import { Search } from '../../components/Search';
import { Table } from '../../components/Table';

import {
  ReceivablesWrapper,
  ReceivablesHeader,
  NewInvoiceButton,
} from './styles';
import colors from '../../styles/colors';

import data from '../../data/data.json';

const TABLE_ITEMS = [
  {
    client: 'Luis Salazar',
    paymentStatus: 'completed',
    cargoStatus: 'processing',
    date: '10/05/22',
    amount: 120000,
    typePayment: 'Supplier',
    installmentsPayed: '3/10',
    paymentDueDate: 'Jun 9',
  },
  {
    client: 'Alfredo Salazar',
    paymentStatus: 'processing',
    cargoStatus: 'delivered',
    date: '24/06/22',
    amount: 829000,
    typePayment: 'Supplier',
    installmentsPayed: '3/10',
    paymentDueDate: 'Jun 9',
  },
  {
    client: 'Rosa Salazar',
    paymentStatus: 'missing',
    cargoStatus: 'missing',
    date: '24/06/22',
    amount: 829000,
    typePayment: 'Supplier',
    installmentsPayed: '3/10',
    paymentDueDate: 'Jun 9',
  },
];

const Receivables = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const tableItems = TABLE_ITEMS;

  console.log(searchValue);

  const headers = data.headerTable;

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
            fn={() => setShowModal(true)}
            text="+ New invoice"
            secondary
          />
        </ReceivablesHeader>
        <Search onChange={(e) => setSearchValue(e.target.value)} />
        <Table headers={headers} tableItems={tableItems} />
      </ReceivablesWrapper>
      <Modal
        visible={showModal}
        title="Add New Invoice"
        onClose={() => setShowModal((prevState) => !prevState)}
        hideCloseIcon
      >
        <span>Hello</span>
      </Modal>
    </Layout>
  );
};

export default Receivables;
