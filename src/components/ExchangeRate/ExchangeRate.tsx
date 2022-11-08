import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { exchangeRatesData } from '../../redux/store';

import { TInputs } from '../../types';
import { Arrows } from '../UI/Icons/Arrows';

import {
  ExchangeRateWrapper,
  ConvertSide,
  Input,
  InputValueMessageWrapper,
  ExchangeRateTitle,
  InputValueMessage,
  CoinTypeWrapper,
  CoinType,
  SwitchTypeWrapper,
  SwitchIconWrapper,
  SwitchIconBox,
  TotalRate,
  TotalRateText,
  RateConversion,
  RateConversionText,
} from './styles';

const ExchangeRate = () => {
  const exchangeRates = useSelector(exchangeRatesData);
  const [switchCoin, setSwitchCoin] = useState<boolean>(false);
  const [firstCoin, setFirstCoin] = useState<string>('');
  const [secondCoin, setSecondCoin] = useState<string>('');
  const [balance, setBalance] = useState<number>(0);
  const { register } = useForm<TInputs>();

  const calculateRate = (amount: number) => setBalance(amount);

  const dollarPerPesoRate = exchangeRates.USD.rates;
  const pesoPerDollarRate = exchangeRates.MXN.rates;

  const { MXN } = dollarPerPesoRate;
  const { USD } = pesoPerDollarRate;

  const switchRateType = !switchCoin ? 'USD' : 'MXN';
  const switchFinalRateType = switchCoin ? 'USD' : 'MXN';
  const totalBalanceRate = switchCoin ? USD * balance : MXN * balance;

  const handleSwitchCoin = () => {
    setSwitchCoin((prevState) => !prevState);
  };

  useEffect(() => {
    if (switchCoin) {
      setFirstCoin('MXN - Mexican Pesos');
      setSecondCoin('USD - US Dollars');
    } else {
      setFirstCoin('USD - US Dollars');
      setSecondCoin('MXN - Mexican Pesos');
    }
  }, [switchCoin]);

  return (
    <ExchangeRateWrapper>
      <ConvertSide>
        <ExchangeRateTitle>Convert</ExchangeRateTitle>
        <Input
          type="number"
          placeholder="$"
          {...register('amount', {
            onChange: (e) => calculateRate(Number(e.target.value)),
          })}
        />
        <InputValueMessageWrapper>
          <InputValueMessage>
            {!balance && 'Enter the amount to convert'}
            {!!balance && !switchCoin && `${balance.toFixed(2)} US Dollars`}
            {!!balance && switchCoin && `${balance.toFixed(2)} Mexican Pesos`}
          </InputValueMessage>
        </InputValueMessageWrapper>
      </ConvertSide>
      <CoinTypeWrapper>
        <SwitchTypeWrapper>
          <CoinType>{firstCoin}</CoinType>
          <CoinType>{secondCoin}</CoinType>
        </SwitchTypeWrapper>
        <SwitchIconWrapper>
          <SwitchIconBox rotate={switchCoin ? 1 : 0} onClick={() => handleSwitchCoin()}>
            <Arrows />
          </SwitchIconBox>
        </SwitchIconWrapper>
      </CoinTypeWrapper>
      <TotalRate>
        <TotalRateText>
          {`${balance.toFixed(2)} ${switchRateType} = ${totalBalanceRate} ${switchFinalRateType}`}
        </TotalRateText>
      </TotalRate>
      <RateConversion>
        <RateConversionText>
          {`1 USD = ${MXN.toFixed(2)} MXN   |    1 MXN = ${USD} USD`}
        </RateConversionText>
      </RateConversion>
    </ExchangeRateWrapper>
  );
};

export default ExchangeRate;
