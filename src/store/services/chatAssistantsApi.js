import {apiSlice} from './apiSlice';

export const chatAssistantsApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    getChatAssistants: build.query({
      query: () => '/user/openai/chat/assistant/list?page=1',
    }),
  }),
  overrideExisting: false,
});

export const {useGetChatAssistantsQuery} = chatAssistantsApi;
