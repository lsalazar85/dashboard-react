import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../data/data.json';

import { Layout } from '../../components/Layout';
import { ExchangeRate } from '../../components/ExchangeRate';
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
  const [name, setName] = useState<string>('');

  const navigate = useNavigate();
  const dashboardData = data.pages.find((page) => page.name === 'Dashboard')?.content;

  useEffect(() => {
    const nameValue = window.localStorage.getItem('name');

    if (nameValue) {
      setName(nameValue);
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <Layout>
      <DashboardWrapper>
        <DashboardTitle text={`${dashboardData?.title}, ${name}`} fontWeight="600" fontSize="1.75rem" />
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
              <ExchangeRate />
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
    </Layout>
  );
};

export default Dashboard;
