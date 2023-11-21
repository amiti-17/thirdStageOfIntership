import { Dispatch, SetStateAction, createContext } from "react";
import { NavigationContext } from '@react-navigation/native';

export type NavigationContextType = {
  navigator: typeof NavigationContext,
  setNavigator: Dispatch<SetStateAction<typeof NavigationContext>>,
}

const defaultNavigator: NavigationContextType = {
  navigator: {} as typeof NavigationContext,
  setNavigator: () => {},
}

export const NavigatorContext = createContext<NavigationContextType>(defaultNavigator);
