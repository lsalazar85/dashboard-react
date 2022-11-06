import { HeaderWrapper, HeaderSide, Text } from './styles';
// import useExchangeRate from '../../hooks/useExchangeRate';
// const { currentRate } = useExchangeRate('USD', 'MXN');

const Header = () => (
  <HeaderWrapper>
    <HeaderSide>
      <Text>1 USD = MXN</Text>
    </HeaderSide>
    <HeaderSide>
      <Text>May 10, 2022</Text>
    </HeaderSide>
  </HeaderWrapper>
);
export default Header;
