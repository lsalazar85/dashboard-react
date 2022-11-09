import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const LayoutContent = styled.div`
  -ms-overflow-style: none; 
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media(min-width: 1024px){
    overflow-y: scroll;
    height: 100%;
  }
  
  @media(min-height: 700px){
    height: 100vh;
  }
`;

export const LayoutSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`;
