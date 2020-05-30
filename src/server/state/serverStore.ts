import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import users from '../../client/state/usersSlice';

const store = configureStore({
  reducer: {
    users: users.reducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: true,
});

export type ServerStore = typeof store;

export default store;
