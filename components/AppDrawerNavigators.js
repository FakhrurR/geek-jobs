import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Right,
  Body,
  Text,
} from 'native-base';
export default class AppDrawerNavigators extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#00b894'}}>
          <Body>
            <Title style={{fontWeight: '700', alignSelf: 'center'}}>GEEKJOBS</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Home</Text>
          <Text>List</Text>
        </Content>
      </Container>
    );
  }
}
