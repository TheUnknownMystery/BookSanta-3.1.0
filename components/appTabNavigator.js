import * as React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BookRequestScreen from "../Screens/BookrequestScreen"
import BookDonateScreen from "../Screens/BookDonateScreen"


export const AppTabNavigator = createBottomTabNavigator({


 DonateBooks: {
  screen: BookDonateScreen,
  navigationOptions: {
   tabBarIcon: <Image
    style={{ width: 20, height: 20 }}
    source={require("../assets/request-book.png")}

   />,
   tabBarLabel: "Donate Books"
  }
 },


 BookRequsts: {
  screen: BookRequestScreen,
  navigationOptions: {
   tabBarIcon: <Image
    style={{ width: 20, height: 20 }}
    source={require("../assets/request-list.png")}

   />,
   tabBarLabel: "RequestBooks"
  }
 }


})

