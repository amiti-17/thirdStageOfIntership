import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from "next/navigation";
import getClient from '../Apollo';
import Footer from './Footer';

export default function RootLayout({ children } : { children: React.ReactNode }): JSX.Element {

  const router = useRouter();
  
  return (
    //ToThink: Is UserProvider should be here???
      <ApolloProvider client={getClient(router)}>
        {children}
        <Footer />
      </ApolloProvider>
  );
}