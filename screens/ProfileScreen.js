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
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
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
        <Header style={{backgroundColor: '#043353'}}>
          <Left>
            <Button transparent onPress={() => this.goToMain()}>
              <Icon2 name="times" size={20} color="white" />
            </Button>
          </Left>
          <Body />
          <Right>
            <TouchableOpacity>
              <Icon2 name="edit" size={20} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>
        <View
          style={{
            width: '100%',
            height: 190,
            backgroundColor: '#043353',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
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
            <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
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
          <TouchableOpacity style={{marginTop: 30, alignItems: 'center'}}>
            <Button style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon2
                name="sign-out-alt"
                size={20}
                color="white"
                style={{marginLeft: 10}}
              />
              <Text>Log Out</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
