import { ITitle } from '../../interfaces';
import { TitleWrapper, TitleSpan } from './styles';

const Title = ({ fontWeight, fontSize, text }: ITitle) => (
  <TitleWrapper>
    <TitleSpan fontWeight={fontWeight} fontSize={fontSize}>{text}</TitleSpan>
  </TitleWrapper>
);

export default Title;
