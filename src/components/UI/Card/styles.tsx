import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

export const CardWrapper = styled.div<{borderColor?: string}>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.Gray200};
  background: ${colors.White};
  padding: 1.438rem 1rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => props.borderColor === 'orange' && css`
    border-color: ${colors.Orange}
  `}

  ${(props) => props.borderColor === 'green' && css`
    border-color: ${colors.Green}
  `}
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.188rem;
  color: ${colors.Black};
`;
