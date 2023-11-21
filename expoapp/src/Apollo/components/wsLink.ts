import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

export const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://192.168.0.89:8080/subscriptions',
}));