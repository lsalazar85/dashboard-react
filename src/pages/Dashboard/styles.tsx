import styled from 'styled-components';
import colors from '../../styles/colors';
import { Title } from '../../components/UI/Title';

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
    &:first-child{
      margin: 1rem 0 1rem 0;
    }
  }

  @media (min-width: 1000px) {
    flex:  0 0 49%;

    &:first-child{
      margin: 0;
    }
  }
`;

export const Amount = styled.span`
  color: ${colors.Blue};
  font-weight: 700;
  font-size: 2rem;
`;
