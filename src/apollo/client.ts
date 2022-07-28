import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://safe-spire-75667.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export default client
