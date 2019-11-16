import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import welcomeScreen from "./welcomePage";
import signUpScreen from "./signUpPage";
import profileCreationScreen from './profile';
import loginScreen from './login';
import ProfileScreen from './mainProfile';
import reminderScreen from './Reminder';
import therapistScreen from './Therapist';
import newsfeedScreen from './newsfeed';

const MainNavigator = createStackNavigator({
  Welcome: {screen: welcomeScreen,
    navigationOptions: () => ({
    title: `Welcome`,
    headerBackTitle: null,
  })
},
  Login: {screen: loginScreen,
    navigationOptions: () => ({
      title: `Logging In`,
       })
  },
  SignUp: {screen: signUpScreen,
    navigationOptions: () => ({
      title: `Registration`,
       })
      },
  ProfileCreation: {screen: profileCreationScreen,
    navigationOptions: () => ({
      title: `Edit Profile`,
       })
  },

  Profile: {screen: ProfileScreen,
    navigationOptions: () => ({
      title: `Profile`,
      headerBackTitle: null,
       })
  },

  Reminder: {screen: reminderScreen,
    navigationOptions: () => ({
      title: `Reminder`,
      headerBackTitle: null,
       })
  },

  Therapist: {screen: therapistScreen,
    navigationOptions: () => ({
      title: `Therapist`,
      headerBackTitle: null,
       })
  },

  NewsFeed: {screen: newsfeedScreen,
    navigationOptions: () => ({
      title: `News Feed`,
      headerBackTitle: null,
       })
  },

});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}
