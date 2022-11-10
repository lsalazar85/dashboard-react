import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

const stateStyle = {
  width: '5.438rem',
  height: '1.438rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem 0',
  color: colors.White,
};

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.438rem;
  padding-bottom: 2rem;
  
  @media(max-width: 1024px){
    width: 100%;
    overflow-x: auto;
  }
`;

export const TableContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  
  @media(max-width: 1024px){
    width: 69.313rem;
  }
`;

export const TableContentItem = styled.div`
  flex: 1 1 7.5rem;
  text-align: center;
  padding: 1rem 0;
`;

export const TableContentItemText = styled.span<{ state?: string }>`
  font-size: 0.75rem;
  text-transform: capitalize;

  ${(props) => props.state?.toLowerCase() === 'completed' && css`
    ${stateStyle};
    background: ${colors.Green};
  `}

  ${(props) => props.state?.toLowerCase() === 'delivered' && css`
    ${stateStyle};
    background: ${colors.Blue};
  `}

  ${(props) => props.state?.toLowerCase() === 'processing' && css`
    ${stateStyle};
    background: ${colors.Orange};
  `}

  ${(props) => props.state?.toLowerCase() === 'missing' && css`
    ${stateStyle};
    background: ${colors.Red};
  `}
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.563rem 1rem 1rem;
  border-bottom: 1px solid ${colors.Gray100};

  @media(max-width: 1024px){
    width: 69.313rem;
    padding: 0 1.563rem 1rem 1.6rem;
  }
`;

export const TableOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(min-width: 200px){
    width: 3.75rem;
  }

  @media(max-width: 1024px){
    flex: 1 1 auto;
    margin-right: 5rem;
  }
`;

export const TableSection = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.938rem;
`;
