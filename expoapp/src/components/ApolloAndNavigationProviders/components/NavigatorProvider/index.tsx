import { ReactNode, useState } from "react";
import { NavigationContext } from '@react-navigation/native';
import { NavigatorContext } from "context/NavigatorContext";

export const NavigatorProvider = ({ children }: {children: ReactNode}) => {

  const [ navigator, setNavigator ] = useState<typeof NavigationContext>({} as typeof NavigationContext);

  return <NavigatorContext.Provider value={{ navigator, setNavigator }}>
    {children}
  </NavigatorContext.Provider>

}