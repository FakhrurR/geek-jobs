/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
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
import IconBar from 'react-native-vector-icons/FontAwesome5';
import {Input, Button} from 'galio-framework';
import ImagePicker from 'react-native-image-picker';

import {addCompany} from './../../../redux/actions/company';
class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      name: '',
      logo: null,
      isLogo: false,
      location: '',
      description: '',
    };
  }

  AddCompanyField = async data => {
    await this.props.dispatch(addCompany(data));
  };

  handleSubmit = () => {
    // let data = {
    //   name: this.state.name,
    //   logo: this.state.logo,
    //   location: this.state.location,
    //   description: this.state.description,
    // };
    // console.log(data);
    const data = new FormData();
    data.append('name', this.state.name);
    data.append('logo', {
      name: this.state.logo.fileName,
      type: this.state.logo.type,
      uri:
        Platform.OS === 'android'
          ? this.state.logo.uri
          : this.state.logo.uri.replace('file://', ''),
    });
    data.append('location', this.state.location);
    data.append('description', this.state.description);

    this.AddCompanyField(data)
      .then(res => {
        alert('Success to Add Data Company');
        this.setState({name: '', logo: null, location: '', description: ''});
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err);
        return;
      });
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({logo: response});
      }
    });
  };

  render() {
    const {logo} = this.state;
    return (
      <View>
        <View
          style={{
            backgroundColor: '#043353',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 25,
              marginBottom: 20,
              marginTop: 20,
              textAlign: 'center',
              color: '#fff',
            }}>
            CREATE COMPANY
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginLeft: 20, marginRight: 20, marginBottom: 80}}>
            <TouchableOpacity
              style={{
                marginTop: 10,
                marginBottom: 10,
                width: 200,
                height: 200,
                backgroundColor: '#dfe6e9',
                alignSelf: 'center',
              }}
              onPress={() => this.handleChoosePhoto()}>
              {!logo && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconBar name="camera" color="#b2bec3" size={30} />
                </View>
              )}
              {logo && (
                <Image
                  source={{uri: logo.uri}}
                  style={{
                    width: 200,
                    height: 200,
                    marginBottom: 10,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />
              )}
            </TouchableOpacity>

            <Input
              placeholder="Company Name"
              style={{borderRadius: 30}}
              onChangeText={item => this.setState({name: item})}
              value={this.state.name}
            />
            <Input
              placeholder="Location"
              style={{borderRadius: 30}}
              onChangeText={item => this.setState({location: item})}
              value={this.state.location}
            />
            <Textarea
              rowSpan={5}
              bordered
              placeholder=" Company Description"
              style={{borderRadius: 30, marginBottom: 10}}
              onChangeText={item => this.setState({description: item})}
              value={this.state.description}
            />
            <View>
              <Button
                style={styles.signupButton}
                onPress={() => this.handleSubmit()}>
                Submit
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps)(AddCompany);

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
