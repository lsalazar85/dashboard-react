import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModalState {
  showModal: boolean;
}

const initialState:IModalState = {
  showModal: false,
};

export const modalStateSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    setModalState: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setModalState } = modalStateSlice.actions;
export default modalStateSlice.reducer;
