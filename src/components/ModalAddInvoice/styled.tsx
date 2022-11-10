import styled from 'styled-components';
import { ExchangeRateTitle } from '../ExchangeRate/styles';

export const AddNewInvoiceForm = styled.form`
  display: flex;
  width: 98%;
  flex-direction: column;
`;

export const AddNewInvoiceItem = styled.div`
  margin: 0.4rem 0 1rem 0;
`;

export const AddNewInvoiceSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddNewInvoiceItemName = styled(ExchangeRateTitle)``;
