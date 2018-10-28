// Library Imports
import React, { Component } from 'react';
import { View } from 'react-native';

// External Library Imports
import { GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';

// Local Imports
import { loginUser } from '../actions';


class LoginScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <GoogleSigninButton
                    style={{ width: 120, height: 48 }}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.props.loginUser}
                    disabled={this.props.loading} />
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

const mapStateToProps = state => {
    return({
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    });
}

export default connect(mapStateToProps, { loginUser })(LoginScreen);