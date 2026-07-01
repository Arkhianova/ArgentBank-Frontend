import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../store/auth/authSlice';
import { profileApi } from './profileApi'
import { apiSlice } from './apiSlice';

export const authApi = apiSlice.injectEndpoints({
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
          // Fetch user profile after successful login
          dispatch(profileApi.endpoints.getProfile.initiate()
)

        } catch (err) {
          console.error('Login failed', err)
        }
      },
    }),
    signUp: builder.mutation({
      query: (formData) => ({
        url: '/user/signup',
        method: 'POST',
        body: formData,
      }),

    }),
  }),
})

export const { useSignInMutation, useSignUpMutation } = authApi