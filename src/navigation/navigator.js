import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import React from 'react';
import routes from './routes';
import Pages from '../enum/Pages';
import {homeStyle, searchStyle} from './styles';
//   import { colors, metrics, fonts } from '../theme';

const searchNavigation = createStackNavigator(
  {
    [Pages.SEARCH]: {
      screen: routes[Pages.SEARCH].screen,
      ...searchStyle(),
    },
  },
  {
    navigationOptions: {
      tabBarLabel: 'SEARCH',
    },
  },
);

const homeNavigation = createStackNavigator(
  {
    [Pages.HOME]: {
      screen: routes[Pages.HOME].screen,
      ...homeStyle(),
    },
    [Pages.ARTICLE]: {
      screen: routes[Pages.ARTICLE].screen,
      ...homeStyle(),
    },
  },
  {
    navigationOptions: {
      tabBarLabel: 'HOME',
    },
  },
);

const mainNavigation = createBottomTabNavigator(
  {
    [Pages.HOME]: homeNavigation,
    [Pages.SEARCH]: searchNavigation,
  },
  {
    lazy: false,
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
      style: {
        height: 60,
      },
    },
  },
);

export const AppNavigation = createAppContainer(mainNavigation);
