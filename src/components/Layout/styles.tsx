import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const LayoutContent = styled.div`
  @media(min-width: 1024px){
    overflow-y: scroll;
  }
`;

export const LayoutSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`;
