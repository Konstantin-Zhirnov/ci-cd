import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://apollo-server-1za11odgc-konstantin-zhirnov.vercel.app/graphql',
  cache: new InMemoryCache(),
})

export default client
