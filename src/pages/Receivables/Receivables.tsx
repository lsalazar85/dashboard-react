import { useState } from 'react';

import { Layout } from '../../components/Layout';
import { Title } from '../../components/UI/Title';
import { Modal } from '../../components/UI/Modal';
import { Search } from '../../components/Search';

import { ReceivablesWrapper, ReceivablesHeader, NewInvoiceButton } from './styles';
import colors from '../../styles/colors';

const Receivables = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

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
          <NewInvoiceButton fn={() => setShowModal(true)} text="+ New invoice" secondary />
        </ReceivablesHeader>
        <Search onChange={(e) => console.log(e.target.value)} />
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
