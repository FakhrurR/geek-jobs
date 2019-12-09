import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';

import store from './redux/store';
//kalo restart port adb reverse tcp:8081 tcp:8081

import MainScreen from './screens/MainScreen';
import DrawerNavigator from './components/AppDrawerNavigators';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailCompany from './screens/DetailCompany';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SplashScreen from './screens/SplashScreen';
import AddJob from './screens/Crud/jobs/AddJob';
import EditJob from './screens/Crud/jobs/EditJob';
import AddCompany from './screens/Crud/companies/AddCompany';
import AddCategory from './screens/Crud/categories/AddCategory';
import EditCategory from './screens/Crud/categories/EditCategory';
import ListCategory from './screens/Crud/categories/ListCategory';
import ListCompany from './screens/Crud/companies/ListCompany';
import ListJob from './screens/Crud/jobs/ListJob';
import SearchScreen from './screens/SearchScreen';
import MyDasboard from './screens/MyDasboard';
import EditCompany from './screens/Crud/companies/EditCompany';
import {StatusBar} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#043353" barStyle="light-content" />
        <AppContainer />
      </Provider>
    );
  }
}
const StackNavigation = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },

  MyDasboard: {
    screen: MyDasboard,
  },
  MainScreen,
  DetailScreen,
  ProfileScreen,
  DrawerNavigator: {
    screen: DrawerNavigator,
  },
  SearchScreen,
  DetailCompany,
  // WelcomeScreen: {
  //   screen: WelcomeScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  ListJob,
  ListCategory,
  EditCategory,
  ListCompany,
  // LoginScreen: {
  //   screen: LoginScreen,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  AddJob: {
    screen: AddJob,
    navigationOptions: {
      header: null,
    },
  },
  EditJob: {
    screen: EditJob,
    navigationOptions: {
      header: null,
    },
  },
  AddCompany: {
    screen: AddCompany,
    navigationOptions: {
      header: null,
    },
  },

  EditCompany: {
    screen: EditCompany,
    navigationOptions: {
      header: null,
    },
  },

  AddCategory: {
    screen: AddCategory,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(StackNavigation);
