import { configureStore } from '@reduxjs/toolkit';
import users from './usersSlice';

const store = configureStore({
  reducer: {
    users: users.reducer,
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
