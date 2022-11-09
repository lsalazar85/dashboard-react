import styled from 'styled-components';

import { Button } from '../../components/UI/Button';

export const ReceivablesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.563rem;
  height: 100%;
`;

export const ReceivablesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewInvoiceButton = styled(Button)`
    border: 1px solid red;
`;
