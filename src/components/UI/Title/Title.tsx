import { ITitle } from '../../../interfaces';
import { TitleWrapper, TitleSpan } from './styles';
import colors from '../../../styles/colors';

const Title = ({
  fontWeight, fontSize, text, color = colors.Blue,
}: ITitle) => (
  <TitleWrapper>
    <TitleSpan color={color} fontWeight={fontWeight} fontSize={fontSize}>{text}</TitleSpan>
  </TitleWrapper>
);

export default Title;
