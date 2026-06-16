import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../services/apiSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// setupListeners(store.dispatch)
