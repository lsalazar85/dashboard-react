import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../../styles/colors';

export const Positioned = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export const Background = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${colors.Black};
`;

export const Content = styled(motion.div)<{width?: string}>`

  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  position: absolute;
  background: ${colors.White};
  padding: 1.87em 1em;
  border-radius: 0.5rem;

  @media(min-width: 800px){
    width: ${({ width }) => width || '30rem'};
  }
`;

export const CloseIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.Black};
  background: rgba(2, 2, 3, 0.07);
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
`;

export const Header = styled.div<{title?: string}>`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${colors.Black};
  margin-bottom: ${({ title }) => (title ? '1.5rem' : '0px')};
  
  ${CloseIcon}{
    position: relative;
    left: 97%;
    top: -15px;
  }
 
`;

export const Scrollable = styled.div`
  max-height: 75vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.2rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.Gray200};
  }
`;
