import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDCOQGQrwDQAg-_8gma7an_SaJfTBsnnMQ',
      authDomain: 'authentication-bbcc4.firebaseapp.com',
      databaseURL: 'https://authentication-bbcc4.firebaseio.com',
      projectId: 'authentication-bbcc4',
      storageBucket: 'authentication-bbcc4.appspot.com',
      messagingSenderId: '1090548202061'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Card>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        </Card>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
