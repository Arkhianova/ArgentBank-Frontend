import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../store/auth/authSlice';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
          headers.set("authorization", `Bearer ${token}`)
        }

        return headers
      },
  }),

  endpoints: () => ({}),
})
