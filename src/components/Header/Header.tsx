import {
  HeaderWrapper, HeaderSide, Text, Notifications,
} from './styles';

import { Bell } from '../UI/Icons/Bell';

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
      <Notifications>
        <Bell />
      </Notifications>
    </HeaderSide>
  </HeaderWrapper>
);
export default Header;
