import { configureStore } from '@reduxjs/toolkit';
import users from './usersSlice';

export default function createClientStore() {
  return configureStore({
    reducer: {
      users: users.reducer,
    },
  });
}

export type ClientStore = ReturnType<typeof createClientStore>;
