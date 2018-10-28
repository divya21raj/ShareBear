// Library Imports
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// External Library Imports
import ReduxThunk from 'redux-thunk';

// Local Imports
import Main from './src/components/Main';
import reducers from './src/reducers';


export default class App extends Component {

  render() {
    return (
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Main />
      </Provider>
    );
  }
}