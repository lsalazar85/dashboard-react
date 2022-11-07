import { useNavigate } from 'react-router-dom';
import data from '../../data/data.json';

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

const Dashboard = () => {
  const navigate = useNavigate();
  const dashboardData = data.pages.find((page) => page.name === 'Dashboard')?.content;

  return (
    <DashboardWrapper>
      <DashboardTitle text={`${dashboardData?.title}, Luis`} fontWeight="600" fontSize="1.75rem" />
      <DashboardMainSection>
        <DashboardSide>
          <Card>
            <CardTitleWrapper>
              <CardTitle>Account Balance</CardTitle>
              <Button text={`${dashboardData?.accountBalance?.btn}`} />
            </CardTitleWrapper>
            <Amount>{`${dashboardData?.accountBalance?.accountTotal}`}</Amount>
          </Card>
          {dashboardData?.makePaymentsAndInvoice?.map((item, idx) => (
            <Card key={idx} border={!idx ? 'orange' : 'green'}>
              <MakeNewItemWrapper>
                <MakeNewItemIcon>
                  {!idx ? <NewPaymentIcon /> : <NewInvoiceIcon width="23" height="31" />}
                </MakeNewItemIcon>
                <MakeNewItem>{item.title}</MakeNewItem>
              </MakeNewItemWrapper>
            </Card>
          ))}
          <Card>
            <CardTitleWrapper>
              <CardTitle>{`${dashboardData?.receivables?.title}`}</CardTitle>
              <Button fn={() => navigate('/receivables')} text={`${dashboardData?.receivables?.btn}`} />
            </CardTitleWrapper>
            <Amount>$4,250,000</Amount>
          </Card>
        </DashboardSide>
        <DashboardSide>
          <Card>
            <CardTitleWrapper>
              <CardTitle>Exchange Rate</CardTitle>
            </CardTitleWrapper>
          </Card>
          <Card>
            <CardTitleWrapper>
              <CardTitle>{`${dashboardData?.payables?.title}`}</CardTitle>
              <Button fn={() => navigate('/receivables')} text={`${dashboardData?.payables?.btn}`} />
            </CardTitleWrapper>
            <Amount>$4,250,000</Amount>
          </Card>
        </DashboardSide>
      </DashboardMainSection>
    </DashboardWrapper>
  );
};

export default Dashboard;
