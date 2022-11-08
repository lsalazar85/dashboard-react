import { useState, useEffect } from 'react';
import axios from 'axios';

import { IUseExchangeRate } from '../interfaces';

const useExchangeRate = (base: string, symbol: string):IUseExchangeRate => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentRate, setCurrentRate] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);

  const getRate = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}latest?base=${base}&symbols=${symbol}`,
        {
          headers: {
            apikey: `${process.env.REACT_APP_EXCHANGE_RATES_KEY}`,
          },
        },
      );
      const rateValue = Object.values(data?.rates)?.[0];
      setCurrentRate(Number(rateValue));
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(new Error(`${e}`));
      throw new Error(`${e}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (base && symbol) {
      getRate();
    }
  }, [base, symbol]);

  return {
    currentRate,
    loading,
    error,
  };
};

export default useExchangeRate;
