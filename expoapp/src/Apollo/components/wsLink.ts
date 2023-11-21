import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

export const wsLink = new GraphQLWsLink(createClient({
  url: 'http://192.168.31.225:8080/subscriptions',
}));