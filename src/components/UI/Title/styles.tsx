import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TitleSpan = styled.span<{ fontWeight: string; fontSize: string, color: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color:${(props) => props.color};;
  line-height: 2.125rem;
`;
