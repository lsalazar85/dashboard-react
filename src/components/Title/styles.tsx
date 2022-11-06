import styled from 'styled-components';
import colors from '../../styles/colors';

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TitleSpan = styled.span<{ fontWeight: string; fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${colors.Blue};
  line-height: 2.125rem;
`;
