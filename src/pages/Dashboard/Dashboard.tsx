import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';

import {
  DashboardWrapper,
  DashboardTitle,
  DashboardMainSection,
  DashboardSide,
  Amount,
  MakeNewItem,
  MakeNewItemIcon,
  MakeNewItemWrapper,
  NewInvoiceIcon,
  NewPaymentIcon,
} from './styles';

import { CardTitleWrapper, CardTitle } from '../../components/UI/Card/styles';

const Dashboard = () => (
  <DashboardWrapper>
    <DashboardTitle text="Hello, Luis." fontWeight="600" fontSize="1.75rem" />
    <DashboardMainSection>
      <DashboardSide>
        <Card>
          <CardTitleWrapper>
            <CardTitle>Account Balance</CardTitle>
            <Button text="Cashout" />
          </CardTitleWrapper>
          <Amount>$4,250,000</Amount>
        </Card>
        <Card border="orange">
          <MakeNewItemWrapper>
            <MakeNewItemIcon>
              <NewPaymentIcon />
            </MakeNewItemIcon>
            <MakeNewItem>Make New Payment</MakeNewItem>
          </MakeNewItemWrapper>
        </Card>
        <Card border="green">
          <MakeNewItemWrapper>
            <MakeNewItemIcon>
              <NewInvoiceIcon width="23" height="31" />
            </MakeNewItemIcon>
            <MakeNewItem>Make New Invoice</MakeNewItem>
          </MakeNewItemWrapper>
        </Card>
      </DashboardSide>
      <DashboardSide>
        <Card>
          <span>Hello</span>
        </Card>
      </DashboardSide>
    </DashboardMainSection>
  </DashboardWrapper>
);

export default Dashboard;
