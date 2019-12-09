/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Card,
  Button,
  Spinner,
  Item,
  TextInput,
  Header,
  Left,
  Body,
  Right,
  Title,
  Segment,
  Content,
  List,
  ListItem,
  Thumbnail,
  Container,
  CardItem,
} from 'native-base';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MyDasboard extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentDidMount(){
    this.getEmail();
  }

  getEmail = async () => {
    this.setState({email: await AsyncStorage.getItem('Authorization')});
  }

  goToDetail = id => {
    this.props.navigation.navigate('DetailScreen', {id});
  };

  goToListJob = () => {
    this.props.navigation.navigate('ListJob');
  };

  goToListCompany = () => {
    this.props.navigation.navigate('ListCompany');
  };

  goToMain = () => {
    this.props.navigation.navigate('MainScreen');
  };

  goToCompany = id => {
    this.props.navigation.navigate('DetailCompany', {id});
  };

  goToProfile = () => {
    this.props.navigation.navigate('ProfileScreen');
  };

  goToSearch = () => {
    this.props.navigation.navigate('SearchScreen');
  };

  goToProfile = () => {
    this.props.navigation.navigate('ProfileScreen');
  };

  goToListCategory = () => {
    this.props.navigation.navigate('ListCategory');
  };

  goToLogin = () => {
    Alert.alert('Log Out', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Ok',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('Authorization');
            this.props.navigation.navigate('LoginScreen');
          } catch (error) {
            // Error saving data
            console.log(error);
          }
        },
      },
    ]);
  }

  render() {
    return (
      <View>
        <View style={{backgroundColor: '#043353', borderBottomRightRadius: 30}}>
          <View style={{marginLeft: 5, marginBottom: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 30, fontWeight: '700', color: 'white'}}>
                My Dashboard
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  marginRight: 15,
                  flex: 1,
                  alignItems: 'flex-end',
                }}
                onPress={() => this.goToLogin()}>
                <Icon
                  name="times-circle"
                  type="font-awesome"
                  color="white"
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 15, color: 'white'}}>
              {this.state.email}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10, width: '100%', height: 160}}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Image
              source={require('./../assets/img/logo.png')}
              style={{width: 150, height: 150, resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View>
          <ScrollView
            style={{marginBottom: 130, marginLeft: 10, marginRight: 10}}
            showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Card
                style={{borderRadius: 5, backgroundColor: '#043353', flex: 1}}>
                <TouchableOpacity
                  style={{marginTop: 10, marginBottom: 10}}
                  onPress={() => this.goToMain()}>
                  <Icon
                    name="home"
                    size={60}
                    type="font-awesome"
                    color="#fff"
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    Home
                  </Text>
                </TouchableOpacity>
              </Card>
              <Card
                style={{borderRadius: 5, backgroundColor: '#043353', flex: 1}}>
                <TouchableOpacity
                  style={{marginTop: 10, marginBottom: 10}}
                  onPress={() => this.goToListJob()}>
                  <Icon
                    name="address-book"
                    size={60}
                    type="font-awesome"
                    color="#fff"
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '700',
                      color: 'white',
                    }}>
                    Manage Jobs
                  </Text>
                </TouchableOpacity>
              </Card>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
              <Card
                style={{borderRadius: 5, backgroundColor: '#043353', flex: 1}}>
                <TouchableOpacity
                  style={{marginTop: 10, marginBottom: 10}}
                  onPress={() => this.goToListCompany()}>
                  <Icon
                    name="building"
                    size={60}
                    type="font-awesome"
                    color="#fff"
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '700',
                      color: 'white',
                    }}>
                    Manage Company
                  </Text>
                </TouchableOpacity>
              </Card>
              <Card
                style={{borderRadius: 5, backgroundColor: '#043353', flex: 1}}>
                <TouchableOpacity
                  style={{marginTop: 10, marginBottom: 10}}
                  onPress={() => this.goToListCategory()}>
                  <Icon
                    name="address-card"
                    size={60}
                    type="font-awesome"
                    color="#fff"
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: '700',
                    }}>
                    Manage Category
                  </Text>
                </TouchableOpacity>
              </Card>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default MyDasboard;
