import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { Icon } from 'react-native-elements'
import IconVect from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from '../screens/Map';
import Settings from '../screens/Settings';
import Home from './HomeScreenNavigator'
import Colors from '../constants/Colors';

export default TabNavigator(
  {
    ObiectiveTuristice: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <IconVect name="home" type="MaterialCommunityIcons" size={30} color={tintColor} />
      },
    },
    Hartă: {
      screen: Map,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="map" type="MaterialIcons" size={30} color={tintColor} />
      },
    },
    Setări: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <IconVect name="account-settings-variant" type="MaterialCommunityIcons" size={30} color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      labelStyle: {
        fontSize: 11,
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
