import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import users from './usersSlice';

const store = configureStore({
  reducer: {
    users: users.reducer,
  },
  middleware: [...getDefaultMiddleware()],
  devTools: true,
  preloadedState: window.INITIAL_STATE,
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
