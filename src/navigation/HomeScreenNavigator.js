import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import ListaMuzee from '../screens/Muzee/ListaMuzee'
import DetaliMuzeu from '../screens/Muzee/DetaliiMuzeu'
export default ListTabNavigator = StackNavigator(
  {
    Obiective: {
      screen: Home,
      navigationOptions: {
        title: "Obiective Turistice",
        headerStyle: {
          backgroundColor: "#c9985f",
        },
        headerTitleStyle: { color: '#fff' },
      }
    },
    Muzee: {
      screen: ListaMuzee,
      navigationOptions: {
        title: "Muzee",
        headerStyle: {
          backgroundColor: "#c9985f",
        },
        headerTitleStyle: { color: '#fff' },
      }
    },
    DetaliMuzeu: {
      screen: DetaliMuzeu,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.denumire}`,
        headerStyle: {
          backgroundColor: "#c9985f",
        },
        headerTitleStyle: { color: '#fff' },
      }),
    }
 }
);
