import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
} from './styles';

type Inputs = {
  amount: string;
};

const ExchangeRate = () => {
  const [switchCoin, setSwitchCoin] = useState<boolean>(false);
  const [firstCoin, setFirstCoin] = useState<string>('USD - Dólar Estadounidense');
  const [secondCoin, setSecondCoin] = useState<string>('MXN - Mexican Pesos');
  const [balance, setBalance] = useState<number>(0);
  const { register } = useForm<Inputs>();

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
        {!!balance && (
        <InputValueMessageWrapper>
          <InputValueMessage>{balance}</InputValueMessage>
        </InputValueMessageWrapper>
        )}
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
    </ExchangeRateWrapper>
  );
};

export default ExchangeRate;
