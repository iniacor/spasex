import { ApolloClient, InMemoryCache } from '@apollo/client';

const SPACEX_API_URL = process.env.BASE_API_URL;

const client = new ApolloClient({
  uri: SPACEX_API_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
export default client;
