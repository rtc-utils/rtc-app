import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './Client';

export default function Provider({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
