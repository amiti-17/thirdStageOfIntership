import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children } : { children: React.ReactNode}): JSX.Element {
  return (
    <html lang="en">
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
  );
}