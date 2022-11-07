import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';

import {
  DashboardWrapper,
  DashboardTitle,
  DashboardMainSection,
  DashboardSide,
  Amount,
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
          <span>Hello</span>
        </Card>
        <Card border="green">
          <span>Hello</span>
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
