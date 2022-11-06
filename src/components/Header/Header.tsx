import { HeaderWrapper, HeaderSide, Text } from './styles';
import { getCurrentDate } from '../../utils';
// import useExchangeRate from '../../hooks/useExchangeRate';
// const { currentRate } = useExchangeRate('USD', 'MXN');

const Header = () => (
  <HeaderWrapper>
    <HeaderSide>
      <Text>1 USD = MXN</Text>
    </HeaderSide>
    <HeaderSide>
      <Text>{getCurrentDate()}</Text>
    </HeaderSide>
  </HeaderWrapper>
);
export default Header;
