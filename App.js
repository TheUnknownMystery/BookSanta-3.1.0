import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import WelcomeScreen from './Screens/WelcomeScreen'
import BookRequestScreen from "./Screens/BookrequestScreen"
import { AppTabNavigator } from './components/appTabNavigator'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'


export default class App extends React.Component {
  render() {
    return (
     <AppContainer/>
    );
  }
}


const switchNavigator = createSwitchNavigator({

  WelcomeScreen: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator }

})

const AppContainer = createAppContainer(switchNavigator)