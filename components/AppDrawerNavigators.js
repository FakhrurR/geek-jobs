import React from 'react';
import {AppRegistry, Image, StatusBar} from 'react-native';
import {Container, Content, Text, List, ListItem ,Header ,Title, Body} from 'native-base';
import { Button } from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';
const routes = ['Home', 'Add Category'];
const data = ['HomeScreen', 'AddCategory'];
export default class AppDarawerNavigators extends React.Component {

  goToProfile = () => {
    this.props.navigation.navigate('ProfileScreen');
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#00b894'}}>
                <Body>
                  <Title
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    GEEKJOBS
                  </Title>
                </Body>
              </Header>
        <Content>
          <TouchableOpacity>
            <Text style={{paddingHorizontal: 30, marginTop: 20}}>Geek Jobs is a platform that you can find job or hire talent you can get many talent and job here where this platform is trusty,and have capebiltity</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
