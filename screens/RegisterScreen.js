/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Input, Button, Item} from 'native-base';
import {connect} from 'react-redux';
import {addUser} from '../redux/actions/user';
import {Left, Icon, Header, Body, Right} from 'native-base';

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
      name: '',
      username: '',
      email: '',
      password: '',
      level: '',
      isSubmit: false,
      showMessage: false,
      isMessage: '',
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

  handleNameChange = text => {
    console.log('username :' + text);
    this.setState({name: text});
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
    this.setState({isLoading: true});
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.name === '' ||
      this.state.username === ''
    ) {
      this.setState({isLoading: false});
      this.setState({showMessage: true, isMessage: 'Please Fill All Field'});
    } else if (reg.test(this.state.email) === false) {
      this.setState({isLoading: false});
      this.setState({
        showMessage: true,
        isMessage: 'Bad Format Email,Please Fill Email With Correct Email',
      });
      return false;
    } else {
      let account = {};
      account.email = this.state.email;
      account.username = this.state.username;
      account.password = this.state.password;
      account.name = this.state.name;

      console.log(account);

      this.addRegister(account)
        .then(res => {
          this.setState({isSubmit: true}, () => {
            this.hideToast();
          });
          alert('Success Add User');
          this.goToLogin();
          console.log(res.data);
        })
        .catch(err => {
          this.setState({isSubmit: false});
          console.log(err);
          return;
        });
    }
  };

  hideToast = () => {
    this.setState({
      isSubmit: false,
    });
  };

  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 30,
            marginBottom: 30,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          SIGN UP
        </Text>
        {this.state.showMessage && (
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'red'}}>
            {this.state.isMessage}
          </Text>
        )}
        <View style={{marginLeft: 20, marginRight: 20}}>
          <Item rounded style={{marginBottom: 10}}>
            <Input
              placeholder="Name"
              style={{marginLeft: 10, fontSize: 15}}
              onChangeText={this.handleNameChange}
              value={this.state.name}
            />
          </Item>
          <Item rounded style={{marginBottom: 10}}>
            <Input
              placeholder="Email"
              style={{marginLeft: 10, fontSize: 15}}
              onChangeText={this.handleEmailChange}
              value={this.state.email}
            />
          </Item>
          <Item rounded style={{marginBottom: 10}}>
            <Input
              placeholder="Username"
              style={{marginLeft: 10, fontSize: 15}}
              onChangeText={this.handleUsernameChange}
              value={this.state.username}
            />
          </Item>
          <Item rounded style={{marginBottom: 10}}>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              style={{marginLeft: 10, fontSize: 15}}
              onChangeText={this.handlePasswordChange}
              value={this.state.password}
            />
          </Item>

          <TouchableOpacity>
            <Button
              block
              dark
              rounded
              style={styles.signupButton}
              onPress={() => this.handleSubmit()}>
              <Text style={{fontSize: 15, color: '#fff'}}>Sign Up</Text>
            </Button>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => this.goToLogin()}>
              <Text style={{color: '#3498db', fontWeight: 'bold'}}>
                {' '}
                Log in
              </Text>
            </TouchableOpacity>
          </View>
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
