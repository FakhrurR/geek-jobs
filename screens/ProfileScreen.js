/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View,
  Image,
  Text,
} from 'native-base';
import {Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  goToMain = () => {
    this.props.navigation.navigate('MainScreen');
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#00b894'}}>
          <Left>
            <Button transparent onPress={() => this.goToMain()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body />
        </Header>
        <View style={{width: '100%', height: 190, backgroundColor: '#00b894'}}>
          <View
            style={{
              alignSelf: 'center',
              borderRadius: 100,
              borderWidth: 4,
              borderColor: '#fff',
            }}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg',
              }}
              size={90}
            />
          </View>
          <View>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: '700',
                fontSize: 20,
                color: '#fff',
              }}>
              Micheal Joche
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: '300',
                fontSize: 13,
                color: '#fff',
              }}>
              Software Developer
            </Text>
            <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff',}}>
              MichealJorche@hotmail.com
            </Text>
            <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
              +654593495349
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: '300',
                fontSize: 15,
                marginTop: 30,
                paddingHorizontal: 20,
                textAlign: 'center',
                color: '#000',
              }}>
              A standard Software Developer job description should include, but
              not be limited to: Researching, designing, implementing and
              managing software programs.
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}
