import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Title } from '../../components/UI/Title';

import { ReceivablesWrapper, ReceivablesHeader, NewInvoiceButton } from './styles';
import colors from '../../styles/colors';

const Receivables = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(showModal);

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
      </ReceivablesWrapper>
    </Layout>
  );
};

export default Receivables;
