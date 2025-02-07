import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/counterSlice';
import userReducer from '../../React_Application/src/store/usersSlice'

export default configureStore( {
    reducer: {
        counter: counterReducer,
    },
    devTools: true
});

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

