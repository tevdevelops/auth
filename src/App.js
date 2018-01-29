import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDCOQGQrwDQAg-_8gma7an_SaJfTBsnnMQ',
      authDomain: 'authentication-bbcc4.firebaseapp.com',
      databaseURL: 'https://authentication-bbcc4.firebaseio.com',
      projectId: 'authentication-bbcc4',
      storageBucket: 'authentication-bbcc4.appspot.com',
      messagingSenderId: '1090548202061'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
