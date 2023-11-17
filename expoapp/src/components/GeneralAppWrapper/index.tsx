import { StatusBar } from "react-native";
import { MyApollo } from "Apollo/";
import { CurrentUser } from "components/GeneralAppWrapper/components/CurrentUser";
import { NavigatorProvider } from "components/GeneralAppWrapper/components/NavigatorProvider";
import { Message } from "./components/Message";

export const GeneralAppWrapper = () => {
  return (
    <MyApollo>
      <CurrentUser>
        <Message>
          <StatusBar />
          <NavigatorProvider />
        </Message>
      </CurrentUser>
    </MyApollo>
  )
}