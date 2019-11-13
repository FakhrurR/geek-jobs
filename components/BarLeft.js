/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';
export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Icon
          icon="user-circle"
          family="fontawesome"
          iconSize={14}
          iconColor="black"
        />
        />
      </View>
    );
  }
}
