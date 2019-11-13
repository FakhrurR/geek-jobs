/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from 'galio-framework';

export default class RegisterScreen extends Component {

  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: '700', fontSize: 30, marginBottom: 30}}>
          SIGN UP
        </Text>
        <Input placeholder="Email" style={{borderRadius: 30}} />
        <Input placeholder="Username" style={{borderRadius: 30}} />
        <Input
          placeholder="Password"
          password
          viewPass
          style={{borderRadius: 30, marginBottom: 10}}
        />
        <View>
          <Button style={styles.signupButton}>Sign Up</Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => this.goToLogin()}>
            <Text style={{color: '#3498db'}}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
  },

  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },

  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },

  signupButton: {
    color: '#27ae60',
    backgroundColor: '#2d3436',
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 30,
    marginBottom: 10,
  },

  LoginButton: {
    color: '#27ae60',
    backgroundColor: '#2ecc71',
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 30,
    marginBottom: 10,
  },
});
