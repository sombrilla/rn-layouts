/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {AppNavigation} from './src/navigation/navigator';
import {getStore} from './src/store';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Provider store={getStore()}>
      <AppNavigation />
    </Provider>
  </>
);

export default App;
