import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://mellifluous-lily-395be2.netlify.app:4000',
  cache: new InMemoryCache(),
})

export default client
