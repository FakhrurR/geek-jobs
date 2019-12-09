/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from 'galio-framework';
import AsyncStorage from '@react-native-community/async-storage';
import {getUser, loginUser} from './../redux/actions/user';
import {ScrollView} from 'react-native-gesture-handler';
import {Spinner} from 'native-base';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      showMessage: false,
      isMessage: '',
      isLoading: false,
    };
  }

  // async componentDidMount(){
  //   await AsyncStorage.getItem('Authorization');
  // }

  goToRegister = () => {
    this.props.navigation.navigate('RegisterScreen');
  };

  goToMain = email => {
    this.props.navigation.navigate('MyDasboard', {email});
  };

  goToMainScreen = () => {
    this.props.navigation.navigate('MainScreen');
  };

  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  // getLogin = async account => {
  //   await this.props.dispatch(loginUser(account));
  // const user = await axios.post(
  //   'http://ec2-35-175-244-140.compute-1.amazonaws.com/user/login',
  //   account,
  // );
  // };

  handleEmailChange = text => {
    console.log('email :' + text);
    this.setState({email: text});
  };

  handlePasswordChange = text => {
    console.log('password :' + text);
    this.setState({password: text});
  };

  handleSubmit = async () => {
    this.setState({isLoading: true});
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === '' || this.state.password === '') {
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
      this.setState({isLoading: false});
      let account = {};
      account.email = this.state.email;
      account.password = this.state.password;

      this.setState({isLoading: true});
      await this.props
        .dispatch(loginUser(account))
        .then(async res => {
          console.log(res.action.payload.data.data.email);
          this.setState({isLoading: false});
          await AsyncStorage.setItem(
            'Authorization',
            res.action.payload.data.data.email,
          );
          // alert('Success to Login');
          this.goToMain(this.state.email);
          this.setState({email: '', password: ''});
        })
        .catch(err => {
          this.setState({
            showMessage: true,
            isMessage: 'Email or password is incorrect',
          });
          console.log(err);
          this.setState({isLoading: false});;
          return;
        });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('./../assets/img/logo.png')}
            style={{
              width: '100%',
              height: 200,
              marginTop: 30,
              resizeMode: 'contain',
              marginBottom: 20,
            }}
          />
          {this.state.isLoading && <Spinner color="black" />}
          {this.state.showMessage && (
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', color: 'red'}}>
              {this.state.isMessage}
            </Text>
          )}
          <Input
            placeholder="Email"
            keyboardType={'email-address'}
            style={{borderRadius: 30}}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
          />
          <Input
            placeholder="Password"
            password
            viewPass
            style={{borderRadius: 30, marginBottom: 10}}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
          />
          <Button
            block
            style={{
              borderRadius: 30,
              marginBottom: 10,
              backgroundColor: 'black',
            }}
            onPress={() => this.handleSubmit()}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Log In</Text>
          </Button>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => this.goToRegister()}>
              <Text style={{color: '#3498db', fontWeight: 'bold'}}>
                {' '}
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{marginTop: 20, alignSelf: 'center', marginBottom: 20}}
            onPress={() => this.goToMainScreen()}>
            <Text style={{color: '#3498db', fontWeight: '700', fontSize: 15}}>
              SKIP >>
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
