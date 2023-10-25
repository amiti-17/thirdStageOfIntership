import React, { useEffect, useState } from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import { useRouter } from "next/navigation";
import getClient from '../Apollo';
import { CurrentUserContext } from 'Contexts/currentUserContext';
import Footer from './Footer';
import { SafeUserType, users } from 'Apollo/queries/users';
import { Header } from './Header';

export default function RootLayout({ children } : { children: React.ReactNode }): JSX.Element {

  const router = useRouter();
  const client = getClient(router);
  const [ user, setUser ] = useState<SafeUserType>();
  
  return (
    //ToThink: Is UserProvider should be here???
      <ApolloProvider client={client}>
        <CurrentUserContext.Provider value={{ user, setUser }}>
          <Header />
          {children}
          <Footer />
        </CurrentUserContext.Provider>
      </ApolloProvider>
  );
}