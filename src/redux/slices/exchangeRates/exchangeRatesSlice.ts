import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  USD: {
    rates: {
      MXN: 20.20,
      EUR: 0.938748,
    },
  },
  MXN: {
    rates: {
      USD: 0.0495,
    },
  },
};

export const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    setExchangeRates: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setExchangeRates } = exchangeRatesSlice.actions;
export default exchangeRatesSlice.reducer;
