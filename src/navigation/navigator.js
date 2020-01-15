import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import React from 'react';
import routes from './routes';
import Pages from '../enum/Pages';
import {homeStyle, moreStyle} from './styles';
//   import { colors, metrics, fonts } from '../theme';

const moreNavigation = createStackNavigator(
  {
    [Pages.MORE]: {
      screen: routes[Pages.MORE].screen,
      ...moreStyle(),
    },
  },
  {
    navigationOptions: {
      tabBarLabel: 'MORE',
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
    [Pages.MORE]: moreNavigation,
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
