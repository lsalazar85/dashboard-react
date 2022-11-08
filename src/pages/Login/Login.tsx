import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Logo } from '../../components/UI/Icons/Logo';

import { EMAIL_VALIDATION_REGEX } from '../../constants';

import {
  LoginWrapper, LoginForm, LoginInput, LoginSubmit,
} from './styles';

import colors from '../../styles/colors';

type Inputs = {
  email: string;
  name: string;
};

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ email, name }) => {
    if (email && name) {
      window.localStorage.setItem('name', name);
      navigate('/');
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Logo color={colors.Blue} />
        <LoginInput
          type="email"
          placeholder="Your email"
          {...register('email', {
            required: true,
            pattern: EMAIL_VALIDATION_REGEX,
          })}
        />
        <LoginInput
          type="text"
          placeholder="Your name"
          {...register('name', { required: true })}
        />
        <LoginSubmit text="Log In" />
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
