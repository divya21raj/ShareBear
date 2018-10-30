// Library Imports
import React, {Component} from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

// External Library Imports
import firebase from 'react-native-firebase';
import { GoogleSignin} from 'react-native-google-signin';

// Local Imports
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import DrawerContent from './DrawerContent';


// The Root of our Stack Navigation
const Drawer = createDrawerNavigator({
        // For each screen that you can navigate to, create a new entry like this:
        Home: {
            screen: HomeScreen,
        }
    },
    {
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: DrawerContent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
    });

const RootStack = createStackNavigator({
    Drawer: { screen: Drawer },
    Home: {
      screen: HomeScreen
    },
    ItemDetail: {
      screen: ItemDetailScreen },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
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
