import {apiSlice} from './apiSlice';

export const preferencesApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation({
      query: data => ({
        url: '/login',
        method: 'POST',
        body: data,
        // transformResponse: response => response.json(),
      }),
      onQueryStarted: (arg, {dispatch, queryFulfilled}) => {
        console.log('query started', arg);
      },
    }),
  }),
  overrideExisting: false,
});

export const {useSignInMutation} = preferencesApi;
