import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageNotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageNotFoundText = styled.h2`
  color: ${colors.Blue};
  margin-top: 2rem;
`;
