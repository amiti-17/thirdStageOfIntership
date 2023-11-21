import { ReactNode } from "react"
import { MyApollo } from "Apollo/";
import { NavigatorProvider } from "./components/NavigatorProvider";

export const ApolloAndNavigationProviders = ({ children }: { children: ReactNode }) => {

  return (
    <NavigatorProvider>
      <MyApollo>
        {children}
      </MyApollo>
    </NavigatorProvider>
  )
}