import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import routes from './routes';
import Pages from '../enum/Pages';
import {homeStyle, searchStyle} from './styles';
//   import { colors, metrics, fonts } from '../theme';

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
    [Pages.SEARCH]: {
      screen: routes[Pages.SEARCH].screen,
      ...searchStyle(),
    },
  },
  {
    mode: 'modal',
    navigationOptions: {
      tabBarLabel: 'HOME',
    },
  },
);

export const AppNavigation = createAppContainer(homeNavigation);
