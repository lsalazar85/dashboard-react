import styled from 'styled-components';
import colors from '../../styles/colors';

import { Title } from '../../components/UI/Title';
import { NewInvoice } from '../../components/UI/Icons/NewInvoice';
import { Payment } from '../../components/UI/Icons/Payment';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colors.Gray};
  padding: 1.563rem;
`;

export const DashboardTitle = styled(Title)``;

export const DashboardMainSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  @media (min-width: 200px) {
    flex-direction: column;
    margin-top: 2rem;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2.313rem;
  }
`;

export const DashboardSide = styled.div`
  @media (min-width: 200px) {
    flex: 1 1 100%;
    &:first-child {
      margin: 1rem 0 1rem 0;
    }
  }

  @media (min-width: 1000px) {
    width: 50%;

    &:first-child {
      margin: 0 1.5rem 0 0;
    }
  }
`;

export const Amount = styled.span`
  color: ${colors.Blue};
  font-weight: 700;

  @media (min-width: 200px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export const MakeNewItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MakeNewItem = styled.span`
  font-weight: 500;
  line-height: 1.563rem;
  color: ${colors.Blue};

  @media (min-width: 200px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.375rem;
  }
`;

export const MakeNewItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.SecondaryLightBlue};
  width: 3.938rem;
  height: 3.938rem;
  margin-right: 1.625rem;
  border-radius: 2rem;
`;

export const NewInvoiceIcon = styled(NewInvoice)``;

export const NewPaymentIcon = styled(Payment)``;
