import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITableItems } from '../../../interfaces';

interface ITableState {
  items: ITableItems[]
}

const initialState:ITableState = {
  items: [
    {
      client: 'Alfredo Salazar',
      paymentStatus: 'completed',
      cargoStatus: 'processing',
      date: '10-05-22',
      amount: 120000,
      typeOfPayment: 'Supplier',
      installmentsPayed: '3/10',
      paymentDueDate: '2022-07-08',
    },
    {
      client: 'Rosa Salazar',
      paymentStatus: 'Processing',
      cargoStatus: 'Missing',
      date: '10-05-22',
      amount: 120000,
      typeOfPayment: 'Supplier',
      installmentsPayed: '3/10',
      paymentDueDate: '2022-07-08',
    },
  ],
};

export const tableSlice = createSlice({
  name: 'tableState',
  initialState,
  reducers: {
    setTableState: (state, action: PayloadAction<any>) => ({
      ...state, items: [...state.items, action.payload],
    }),
  },
});

export const { setTableState } = tableSlice.actions;
export default tableSlice.reducer;
