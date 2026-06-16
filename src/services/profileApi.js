import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setProfile } from '../store/profile/profileSlice';
import { apiSlice } from './apiSlice';

export const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/user/profile',
      }),
    }),
  }),
})

export const { useGetProfileQuery } = profileApi