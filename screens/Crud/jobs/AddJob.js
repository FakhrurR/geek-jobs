/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Header, Content, Form, Item, Picker, Textarea} from 'native-base';
import {connect} from 'react-redux';
import {Input, Button} from 'galio-framework';

export default class AddJob extends Component {
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
            CREATE JOB
          </Text>
          <Input placeholder="Job Name" style={{borderRadius: 30}} />
          <Textarea
            rowSpan={5}
            bordered
            placeholder=" Description"
            style={{borderRadius: 30, marginBottom: 10}}
          />
          <Item
            picker
            style={{
              borderRadius: null,
              marginBottom: 10,
              marginLeft: 16,
              marginRight: 16,
            }}>
            <Picker
              mode="dropdown"
              style={{width: undefined, borderRadius: null}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}>
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
          <Input
            placeholder="Salary"
            style={{borderRadius: 30, marginBottom: 10}}
          />
          <Input
            placeholder="Location"
            style={{borderRadius: 30, marginBottom: 10}}
          />
          <Item
            picker
            style={{
              borderRadius: null,
              marginBottom: 10,
              marginLeft: 16,
              marginRight: 16,
            }}>
            <Picker
              mode="dropdown"
              style={{width: undefined, borderRadius: null}}
              placeholder="Select your Company"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}>
              <Picker.Item label="Pertamina" value="key0" />
              <Picker.Item label="Bank BRI" value="key1" />
              <Picker.Item label="Gojek" value="key2" />
              <Picker.Item label="Grab" value="key3" />
            </Picker>
          </Item>
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
