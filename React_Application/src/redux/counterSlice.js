import { createSlice } from '@reduxjs/toolkit';

// Состояние по умолчанию
const initialState = {
  count: 0,
};

// Создание слайса с редьюсерами
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
// Экспорт экшенов для использования в компонентах
export const { increment, decrement, reset } = counterSlice.actions;

// Экспорт редьюсера для добавления в store
export default counterSlice.reducer;
