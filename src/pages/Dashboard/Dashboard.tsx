import {
  DashboardWrapper,
  DashboardTitle,
  DashboardMainSection,
  DashboardSide,
} from './styles';

const Dashboard = () => (
  <DashboardWrapper>
    <DashboardTitle text="Hello, Luis." fontWeight="600" fontSize="1.75rem" />
    <DashboardMainSection>
      <DashboardSide>
        hellow
      </DashboardSide>
      <DashboardSide>
        hellow
      </DashboardSide>
    </DashboardMainSection>
  </DashboardWrapper>
);

export default Dashboard;
