import { CardWrapper } from './styles';
import { ICard } from '../../../interfaces';

const Card = ({ children, border }: ICard) => (
  <CardWrapper borderColor={border}>
    {children}
  </CardWrapper>
);

export default Card;
