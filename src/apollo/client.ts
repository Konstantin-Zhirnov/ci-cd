import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://heartfelt-salmiakki-def3aa.netlify.app/',
  cache: new InMemoryCache(),
})

export default client
