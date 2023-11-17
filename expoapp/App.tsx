import * as React from 'react';
import { AppRegistry } from 'react-native';
import { GeneralAppWrapper } from 'components/GeneralAppWrapper';

export default function App() {
  return (
    <GeneralAppWrapper />
  );
}

AppRegistry.registerComponent('MyApplication', () => App);
