/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {AppNavigation} from './src/navigation/navigator';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <AppNavigation />
    {/* <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Henlo</Text>
      </ScrollView>
    </SafeAreaView> */}
  </>
);

export default App;
