import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';


import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';


export const loginUser = () => {
    console.log("login");
    
    return (dispatch) => {
        dispatch({type: LOGIN_USER});

        GoogleSignin.signIn()
        .then((data) => {
            console.log("Success");
            
            // Create a new Firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
            
            // Login with the credential
            firebase.auth().signInWithCredential(credential)
                .then((user) => {
                    // If you need to do anything with the user, do it here
                    // The user will be logged in automatically by the
                    // `onAuthStateChanged` listener we set up in App.js earlier
                    loginUserSuccess(dispatch, user)
                })
                .catch((error) => {
                    // For details of error codes, see the docs
                    // The message contains the default Firebase string
                    // representation of the error
                    const { code, message } = error;
                    console.log(message);
                    loginUserFailed(dispatch)
                });
        });
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS, 
        payload: user
    });

    Actions.main();
}