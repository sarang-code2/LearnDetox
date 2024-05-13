import {setAuth} from '../slices/authSlice';
import {apiSlice} from './apiSlice';

export const preferencesApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation({
      query: data => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setAuth(data?.response?.records));
        } catch {}
      },
    }),
  }),
  overrideExisting: false,
});

export const {useSignInMutation} = preferencesApi;
