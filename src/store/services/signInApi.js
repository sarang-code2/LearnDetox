import {apiSlice} from './apiSlice';

export const preferencesApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation({
      query: data => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useSignInMutation} = preferencesApi;
