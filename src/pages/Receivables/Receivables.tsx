import { useState } from 'react';
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

const Receivables = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch();
  const { items } = useSelector(tableStateData);

  const headers = data.headerTable;

  const setNewInvoice = () => {
    dispatch(
      setModalState({
        showModal: true,
      }),
    );
  };

  console.log(searchValue);

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
        <Search onChange={(e) => setSearchValue(e.target.value)} />
        <Table headers={headers} tableItems={items} />
      </ReceivablesWrapper>
      <ModalAddInvoice />
    </Layout>
  );
};

export default Receivables;
