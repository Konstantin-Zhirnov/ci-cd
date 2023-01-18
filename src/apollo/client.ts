import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://heartfelt-salmiakki-def3aa.netlify.app/',
  cache: new InMemoryCache(),
})
