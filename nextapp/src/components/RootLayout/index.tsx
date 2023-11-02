import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from "next/navigation";
import getClient from 'Apollo';
import { UserContext } from 'Contexts/userContext';
import Footer from 'components/RootLayout/components/Footer';
import { Header } from 'components/RootLayout/components/Header';
import { SafeUserType } from 'config/system/types/SafeUserType';

export default function RootLayout({ children } : { children: React.ReactNode }): JSX.Element {

  const router = useRouter();
  const client = getClient(router);
  const [ user, setUser ] = useState<SafeUserType>();
  
  return (
      <ApolloProvider client={client}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          {children}
          <Footer />
        </UserContext.Provider>
      </ApolloProvider>
  );
}