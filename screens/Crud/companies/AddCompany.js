/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Textarea,
} from 'native-base';
import {connect} from 'react-redux';
import {Input, Button} from 'galio-framework';

export default class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }

  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{fontWeight: '700', fontSize: 25, marginBottom: 20}}>
            CREATE COMPANY
          </Text>
          <Input placeholder="Company Name" style={{borderRadius: 30}} />
          <Input placeholder="Logo" style={{borderRadius: 30}} />
          <Input placeholder="Location" style={{borderRadius: 30}} />

          <Textarea
            rowSpan={5}
            bordered
            placeholder=" Company Description"
            style={{borderRadius: 30, marginBottom: 10}}
          />
          <View>
            <Button style={styles.signupButton}>Submit</Button>
          </View>
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
    marginBottom: 20,
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
