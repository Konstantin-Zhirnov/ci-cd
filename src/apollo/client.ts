import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://relaxed-cascaron-bc9642.netlify.app/',
  // uri: 'https://safe-spire-75667.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export default client
