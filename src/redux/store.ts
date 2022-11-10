import { configureStore } from '@reduxjs/toolkit';

import ExchangeRatesReducer from './slices/exchangeRates/exchangeRatesSlice';
import ModalStateReducer from './slices/modal/modalSlice';
import TableStateReducer from './slices/table/tableSlice';

export const store = configureStore({
  reducer: {
    exchangeRateValue: ExchangeRatesReducer,
    modalValue: ModalStateReducer,
    tableValue: TableStateReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const exchangeRatesData = (state: RootState) => state.exchangeRateValue;
export const modalStateData = (state: RootState) => state.modalValue;
export const tableStateData = (state: RootState) => state.tableValue;

export type AppDispatch = typeof store.dispatch;
