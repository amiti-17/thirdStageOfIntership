import { ReactNode, useState } from "react";
import { NavigatorContext } from "context/NavigatorContext";

export const NavigatorProvider = ({ children }: {children: ReactNode}) => {

  const [ navigator, setNavigator ] = useState<any>({});

  return <NavigatorContext.Provider value={{ navigator, setNavigator }}>
    {children}
  </NavigatorContext.Provider>

}