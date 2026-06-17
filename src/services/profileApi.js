import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './apiSlice';

export const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/user/profile',
      }),
    }),
    updateProfile: builder.mutation({
      query: (userName) => ({
        url: "/user/profile",
        method: "PUT",
        body: {
          userName,
        },
      }),

      async onQueryStarted(userName, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          profileApi.util.updateQueryData(
            "getProfile",
            undefined,
            (draft) => {
              draft.body.userName = userName
            }
          )
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      }
    }),
  })
  })

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi