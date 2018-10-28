// Library Imports
import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

// External Library Imports
import firebase from 'react-native-firebase';
import { GoogleSignin} from 'react-native-google-signin';

// Local Imports
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';


// The Root of our Stack Navigation
const RootStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class Main extends Component {
  constructor() {
    super();
    GoogleSignin.configure();
    this.state = {
      loading: true,
    };
  }

  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        loading: false,
        user,
      });
    });
  }

  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    // The application is initialising
    if (this.state.loading) return null;

    // The user is an Object, so they're logged in
    if (this.state.user){
      return <RootStack />
    }

    // The user is null, so they're logged out
    return <LoginScreen />
  }
}