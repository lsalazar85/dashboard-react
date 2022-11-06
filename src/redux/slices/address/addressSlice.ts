import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  addressName: '',
  latitude: 0,
  longitude: 0,
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;
