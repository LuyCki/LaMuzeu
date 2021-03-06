import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
  
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
