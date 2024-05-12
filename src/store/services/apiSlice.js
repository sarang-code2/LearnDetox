import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://demo.artifism.techvill.net/api/V1',
    prepareHeaders: async (headers, {getState}) => {
      const auth = getState().auth;
      if (auth) {
        headers.set('Authorization', `Bearer ${auth?.auth?.token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
