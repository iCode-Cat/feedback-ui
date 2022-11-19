import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IUser {
  email: string;
  password: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<void, void>({
      query: () => `/user/me`,
      // providesTags: ['User'],
    }),
    registerUser: builder.mutation({
      query: ({ email, password }: IUser) => ({
        url: '/user/register',
        method: 'POST',
        body: { email, password },
      }),
      // invalidatesTags: ['User'],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetMeQuery, useRegisterUserMutation } = apiSlice;
