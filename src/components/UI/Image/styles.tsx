import styled from 'styled-components';

export const ImageContainer = styled.div<{ width: string; height?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

export const ImageElement = styled.img`
  width: 100%;
  height: auto;
`;
