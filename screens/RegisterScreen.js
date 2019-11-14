/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from 'galio-framework';
import {addUser} from '../redux/actions/user';

const Toast = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      level: '',
      isSubmit: false,
    };
  }

  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  addRegister = async account => {
    await this.props.dispatch(addUser(account));
  };

  handleUsernameChange = text => {
    console.log('username :' + text);
    this.setState({username: text});
  };

  handleEmailChange = text => {
    console.log('Email :' + text);
    this.setState({email: text});
  };

  handlePasswordChange = text => {
    console.log('password :' + text);
    this.setState({password: text});
  };

  handleSubmit = () => {
    let account = {};
    account.email = this.state.email;
    account.username = this.state.username;
    account.password = this.state.password;
    
    this.addRegister(account)
      .then(res => {
        this.setState({isSubmit: true}, () => {
          this.hideToast();
        });
        console.log(res.data);
      })
      .catch(err => {
        this.setState({isSubmit: false});
        console.log(err);
        return;
      });
  };

  hideToast = () => {
    this.setState({
      isSubmit: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: '700', fontSize: 30, marginBottom: 30}}>
          SIGN UP
        </Text>
        <Input
          placeholder="Email"
          style={{borderRadius: 30}}
          onChangeText={this.handleEmailChange}
          value={this.state.email}
        />
        <Input
          placeholder="Username"
          style={{borderRadius: 30}}
          onChangeText={this.handleUsernameChange}
          value={this.state.username}
        />
        <Input
          placeholder="Password"
          password
          viewPass
          style={{borderRadius: 30, marginBottom: 10}}
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
        />
        <View>
          <Button
            style={styles.signupButton}
            onPress={() => this.handleSubmit()}>
            Sign Up
          </Button>
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

const mapStateProps = state => ({
  user: state.user,
});

export default connect(mapStateProps)(RegisterScreen);
