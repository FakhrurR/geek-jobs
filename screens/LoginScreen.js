/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from 'galio-framework';

import {getUser} from './../redux/actions/user';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isError: '',
      email: '',
      password: '',
      token: '',
    };
  }

  goToRegister = () => {
    this.props.navigation.navigate('RegisterScreen');
  };

  goToMain = () => {
    this.props.navigation.navigate('MainScreen');
  };

  getLogin = async account => {
    await this.props.dispatch(getUser(account));
  };

  handleEmailChange = event => {
    this.setState({email: event.target.value});
  };

  handlePasswordChange = event => {
    this.setState({password: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    const account = {
      email: this.state.email,
      password: this.state.password,
    };

    this.getLogin(account)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: '700', fontSize: 40, marginBottom: 30}}>
          GEEKJOBS
        </Text>
        <Input placeholder="Username or Email" style={{borderRadius: 30}} />
        <Input
          placeholder="Password"
          password
          viewPass
          style={{borderRadius: 30, marginBottom: 10}}
        />
        <View>
          <Button style={styles.LoginButton} onPress={() => this.goToMain()}>
            Log in
          </Button>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => this.goToRegister()}>
            <Text style={{color: '#3498db'}}> Signup</Text>
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(LoginScreen);
