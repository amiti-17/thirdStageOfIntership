import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';

export default function RootLayout({ children } : { children: React.ReactNode}): JSX.Element {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}