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

class MyDasboard extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      flex: 1,
      textAlign: 'left',
      color: '#fff',
      fontWeight: '700',
    },
    headerStyle: {
      backgroundColor: '#00b894',
    },
    title: 'My Dasboard',
  };

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1, alignSelf: 'center'}}>
        <Card>
          <TouchableOpacity style={{marginTop: 10}}>
            <Icon
              name="address-book"
              size={60}
              type="font-awesome"
              color="#00b894"
            />
            <Text style={{textAlign: 'center', fontWeight: '700'}}>
              Manage Jobs
            </Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity style={{marginTop: 10}}>
            <Icon name="search" size={60} type="font-awesome" color="#00b894" />
            <Text style={{textAlign: 'center', fontWeight: '700'}}>
              Find Jobs
            </Text>
          </TouchableOpacity>
        </Card>
        <View style={{flexDirection: 'row'}}>
          <Card style={{marginRight: 30, marginLeft: 10, marginTop: 10}}>
            <TouchableOpacity style={{marginTop: 10}}>
              <Icon
                name="building"
                size={60}
                type="font-awesome"
                color="#00b894"
              />
              <Text style={{textAlign: 'center', fontWeight: '700'}}>
                Manage Company
              </Text>
            </TouchableOpacity>
          </Card>
          <Card style={{marginRight: 30, marginLeft: 10, marginTop: 10}}>
            <TouchableOpacity style={{marginTop: 10}}>
              <Icon
                name="address-card"
                size={60}
                type="font-awesome"
                color="#00b894"
              />
              <Text style={{textAlign: 'center', fontWeight: '700'}}>
                Manage Category
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    );
  }
}
export default MyDasboard;
