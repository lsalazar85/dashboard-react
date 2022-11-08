import { configureStore } from '@reduxjs/toolkit';
import ExchangeRatesReducer from './slices/exchangeRates/exchangeRatesSlice';

export const store = configureStore({
  reducer: {
    value: ExchangeRatesReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const exchangeRatesData = (state: RootState) => state.value;
export type AppDispatch = typeof store.dispatch;
