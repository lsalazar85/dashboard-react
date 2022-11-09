import styled from 'styled-components';
import colors from '../../styles/colors';

import { Input } from '../../components/ExchangeRate/styles';
import { Button } from '../../components/UI/Button';

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  border: 1px solid ${colors.Gray200};
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 200px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`;

export const LoginInput = styled(Input)`
  margin: 1rem 0;
`;

export const LoginSubmit = styled(Button)`
    margin-top: 1.2rem;
`;
