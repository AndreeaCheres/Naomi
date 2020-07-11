import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import RegisterScreen from './../screens/RegisterScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Register: createSwitchNavigator({
      // For each screen that you can navigate to, create a new entry like this:
      RegisterScreen: {
        screen: RegisterScreen,      
        headerMode: 'none',
        navigationOptions: {
          //title: "Sign Up",
          headerVisible: false,
        }
      }
    }),    
  })
);
