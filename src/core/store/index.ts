import { configureStore } from '@reduxjs/toolkit';

import catalogSlice from '../../modules/catalog/store';

export const store = configureStore({
  reducer: {
    // TODO: https://redux.js.org/usage/code-splitting
    [catalogSlice.name]: catalogSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
