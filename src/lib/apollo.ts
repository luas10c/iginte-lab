import { ApolloClient, InMemoryCache,  } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_API_URL,
  headers: {
    'Authorization': `bearer ${import.meta.env.VITE_GRAPHCMS_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})