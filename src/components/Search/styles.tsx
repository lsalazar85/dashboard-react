import styled from 'styled-components';
import colors from '../../styles/colors';

export const SearchContainer = styled.form`
  display: flex;
  margin: 1.563rem 0;

  @media(min-width: 200px){
    width: 90%;
    margin: 1.563rem auto ;
  }
  
  @media(min-width: 1024px){
    width: 22.5rem;
    margin: 1.563rem 0;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1.438rem;
  background: ${colors.White};
  border: 1px solid ${colors.Gray100};
  color: ${colors.Gray300};
  font-size: 1rem;
  gap: 1.188rem;

  @media(max-width: 1024px){
    text-align: center;
  }
`;
