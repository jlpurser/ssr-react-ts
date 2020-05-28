import { configureStore } from '@reduxjs/toolkit';

export default function createServerStore() {
  return configureStore({
    reducer: {
      count: () => 1,
    },
  });
}

export type ServerStore = ReturnType<typeof createServerStore>;
