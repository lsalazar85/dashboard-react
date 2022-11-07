import { ButtonContainer } from './styles';

import { IButton } from '../../../interfaces';

const Button = ({
  fn, text, disabled, secondary,
}: IButton) => (
  <ButtonContainer secondary={secondary} onClick={fn} disabled={disabled}>
    {text}
  </ButtonContainer>
);

export default Button;
