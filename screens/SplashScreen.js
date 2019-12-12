/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  BackHandler,
} from 'react-native';
import {connect} from 'react-redux';
import {Spinner} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashScreen extends Component {
  componentDidMount() {
    this.getAsyncStorage();
  }

  getAsyncStorage = async () => {
    const value = await AsyncStorage.getItem('Authorization');
    if (value !== null) {
      setTimeout(() => {
        this.props.navigation.navigate('MyDasboard');
      }, 3000);
    } else {
      setTimeout(() => {
        this.props.navigation.navigate('LoginScreen');
      }, 3000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./../assets/img/logo.png')}
          style={{width: '100%', height: 200, resizeMode: 'contain'}}
        />
        <Spinner color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});
