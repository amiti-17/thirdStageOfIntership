import FlashMessage from "react-native-flash-message";
import { StatusBar } from "react-native";
import { ApolloAndNavigationProviders } from "components/ApolloAndNavigationProviders";
import { CurrentUser } from "components/GeneralAppWrapper/components/CurrentUser";
import { StackScreen } from "./components/StackScreen";
import { Message } from "./components/Message";

export const GeneralAppWrapper = () => {
  return (
    <ApolloAndNavigationProviders>
      <CurrentUser>
        <Message>
          <StatusBar />
          <StackScreen />
          <FlashMessage position="top" />
        </Message>
      </CurrentUser>
    </ApolloAndNavigationProviders>
  )
}