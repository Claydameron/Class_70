import React from 'react';
import Search from './screens/search';
import {Text} from 'react-native';
import Transaction from './screens/transac';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render() {
    return(
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Search: {screen:Search},
  Transaction: {screen:Transaction}
})

const AppContainer = createAppContainer(TabNavigator)
