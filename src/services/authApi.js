import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../store/auth/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
  }),

  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          const token = data.body.token
          dispatch(setCredentials({ token }))
          localStorage.setItem('token', token)

        } catch (err) {
          console.error('Login failed', err)
        }
      },
    }),
    getProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      }),
    }),
  }),

})

export const { useSignInMutation, useGetProfileQuery } = authApi