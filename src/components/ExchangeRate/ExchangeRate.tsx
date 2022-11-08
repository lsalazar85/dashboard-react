import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { TInputs } from '../../types';
import { ICurrentRate } from '../../interfaces';
import data from '../../data/data.json';

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
  const [switchCoin, setSwitchCoin] = useState<boolean>(false);
  const [firstCoin, setFirstCoin] = useState<string>('USD - Dólar Estadounidense');
  const [secondCoin, setSecondCoin] = useState<string>('MXN - Mexican Pesos');
  const [balance, setBalance] = useState<number>(0);

  const dollarPerPesoRate = data && data?.coins?.USD?.find((item: ICurrentRate) => item?.exchange === 'MXN');
  const pesoPerDollarRate = data?.coins?.MXN?.find((item: ICurrentRate) => item?.exchange === 'USD');

  const { register } = useForm<TInputs>();

  const calculateRate = (amount: number) => setBalance(amount);

  const handleSwitchCoin = () => {
    setSwitchCoin((prevState) => !prevState);
  };

  useEffect(() => {
    if (switchCoin) {
      setFirstCoin('MXN - Mexican Pesos');
      setSecondCoin('USD - Dólar Estadounidense');
    } else {
      setFirstCoin('USD - Dólar Estadounidense');
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
          <InputValueMessage>{balance}</InputValueMessage>
        </InputValueMessageWrapper>
      </ConvertSide>
      <CoinTypeWrapper>
        <SwitchTypeWrapper>
          <CoinType>{firstCoin}</CoinType>
          <CoinType>{secondCoin}</CoinType>
        </SwitchTypeWrapper>
        <SwitchIconWrapper>
          <SwitchIconBox onClick={() => handleSwitchCoin()}>
            <Arrows />
          </SwitchIconBox>
        </SwitchIconWrapper>
      </CoinTypeWrapper>
      <TotalRate>
        <TotalRateText>
          5 US = 100 MXN
        </TotalRateText>
      </TotalRate>
      <RateConversion>
        <RateConversionText>
          {`1 USD = ${dollarPerPesoRate?.rate} MXN   |    1 MXN = ${pesoPerDollarRate?.rate} USD`}
        </RateConversionText>
      </RateConversion>
    </ExchangeRateWrapper>
  );
};

export default ExchangeRate;
