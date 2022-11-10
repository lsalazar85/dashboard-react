import styled from 'styled-components';
import colors from '../../styles/colors';

import { Button } from '../../components/UI/Button';
import { ExchangeRateTitle } from '../../components/ExchangeRate/styles';

export const ReceivablesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.LightGray};
  height: 100%;
`;

export const ReceivablesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.563rem;
`;

export const NewInvoiceButton = styled(Button)``;

export const AddNewInvoiceSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddNewInvoiceItemName = styled(ExchangeRateTitle)``;
