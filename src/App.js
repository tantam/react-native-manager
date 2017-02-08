import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'
import Router from './Router'

class App extends Component {
  componentWillMount() {

     var config = {
        apiKey: "AIzaSyD9dtX8n1ZAgLYFGS7fU3rJ1976XInWmFs",
        authDomain: "manger-3b8ec.firebaseapp.com",
        databaseURL: "https://manger-3b8ec.firebaseio.com",
        storageBucket: "manger-3b8ec.appspot.com",
        messagingSenderId: "883446798867"
      };
      firebase.initializeApp(config);

  }
  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
     	<Provider store={store} >
      <View style={{ flex: 1}}>
          <Router />
     		</View>
     	</Provider>
    );
  }
}

export default App;