import data from '../../data/data.json';

import {
  HeaderWrapper,
  HeaderSide,
  Text,
  Notifications,
  ExchangeRateDate,
  HeaderMobileLogo,
} from './styles';

import { Bell } from '../UI/Icons/Bell';
import { Logo } from '../UI/Icons/Logo';

import { getCurrentDate } from '../../utils';
import colors from '../../styles/colors';

const Header = () => {
  const dollarPerPesoRate = data?.coins?.USD?.find((item) => item.exchange === 'MXN');

  return (
    <HeaderWrapper>
      <HeaderSide>
        <HeaderMobileLogo>
          <Logo width="130px" color={colors?.Blue} />
        </HeaderMobileLogo>
        <ExchangeRateDate>
          <Text>{`1 USD = ${dollarPerPesoRate?.rate} MXN`}</Text>
        </ExchangeRateDate>
      </HeaderSide>
      <HeaderSide>
        <Text>{getCurrentDate()}</Text>
        <Notifications>
          <Bell />
        </Notifications>
      </HeaderSide>
    </HeaderWrapper>
  );
};
export default Header;
