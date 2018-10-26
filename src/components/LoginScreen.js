// Library Imports
import React, { Component } from 'react';
import { View } from 'react-native';

// External Library Imports
import firebase from 'react-native-firebase';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';


export default class LoginScreen extends Component{
    constructor() {
        super();
        this.state = {
          loading: true,
        };
    }

    componentDidMount() {
          this.setState({
            loading: false,
          });
    }

    onLoginOrRegister = () => {
        console.log("login");
        GoogleSignin.signIn()
            .then((data) => {
                console.log("Success");
    
                // Create a new Firebase credential with the token
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    
                // Login with the credential
                return firebase.auth().signInWithCredential(credential);
            })
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
                const { code, message } = error;
                console.log(message);
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
        });
    }
    

    render(){
        console.log("render");
        return(
            <View style={styles.container}>
                <GoogleSigninButton
                    style={{ width: 120, height: 48 }}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.onLoginOrRegister}
                    disabled={this.state.loading} />
            </View>
        );
    }
}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
}