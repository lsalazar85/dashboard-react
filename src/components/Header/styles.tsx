import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.Gray200};
  padding: 24px 30px;
`;

export const HeaderSide = styled.div`
    display: flex;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
`;
