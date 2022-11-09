import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { exchangeRatesData } from '../../redux/store';

import {
  HeaderWrapper,
  HeaderSide,
  Text,
  Notifications,
  ExchangeRateDate,
  HeaderMobileLogo,
  DateText,
} from './styles';

import { Bell } from '../UI/Icons/Bell';
import { Logo } from '../UI/Icons/Logo';

import { getCurrentDate } from '../../utils';
import colors from '../../styles/colors';

import { SideBarMobile } from '../SideBar/SideBarMobile';

const Header = () => {
  const location = useLocation();
  const exchangeRates = useSelector(exchangeRatesData);
  const dollarPerPesoRate = exchangeRates.USD.rates;

  const { pathname } = location;
  const { MXN, EUR } = dollarPerPesoRate;

  return (
    <HeaderWrapper>
      <HeaderSide>
        <HeaderMobileLogo>
          <SideBarMobile pageWrapId="page-wrap" outerContainerId="App" />
          <Logo width="130px" color={colors?.Blue} />
        </HeaderMobileLogo>
        <ExchangeRateDate>
          <Text>
            {pathname !== 'receivables'
              ? `1 USD = ${MXN.toFixed(2)} MXN`
              : `1 USD = ${EUR} EUR`}
          </Text>
        </ExchangeRateDate>
      </HeaderSide>
      <HeaderSide>
        <DateText>{getCurrentDate()}</DateText>
        <Notifications>
          <Bell />
        </Notifications>
      </HeaderSide>
    </HeaderWrapper>
  );
};
export default Header;
