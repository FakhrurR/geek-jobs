/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Content,
  Form,
  Item,
  Picker,
  Textarea,
} from 'native-base';
import {connect} from 'react-redux';
import {Input, Button} from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getCategory} from './../../../redux/actions/category';
import {addCategory} from './../../../redux/actions/category';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  addCategory = async data => {
    await this.props.dispatch(addCategory(data));
  };

  handleSubmit = () => {
    let data = {
      name: this.state.name,
    };

    console.log(data);
    this.addCategory(data)
      .then(res => {
        alert('Success to Add Category');
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err);
        this.props.navigation.goBack();
      });
  };

  handleCategoryChange = text => {
    console.log('category :' + text);
    this.setState({
      name: text,
    });
  };

  render() {
    return (
      <Container>
        <View
          style={{
            backgroundColor: '#043353',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          {/* <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => this.props.navigation.goBack()}>
          <Icon name="times" size={20} />
        </TouchableOpacity> */}
          <Text
            style={{
              fontWeight: '700',
              fontSize: 25,
              marginTop: 10,
              marginBottom: 10,
              textAlign: 'center',
              color: '#fff',
            }}>
            CREATE CATEGORY
          </Text>
        </View>
        <View style={styles.container}>
          <Input
            placeholder="Category Name"
            style={{borderRadius: 30}}
            onChangeText={this.handleCategoryChange}
            value={this.state.name}
          />
          <Button
            style={{borderRadius: 20, backgroundColor: '#000'}}
            onPress={() => this.handleSubmit()}>
            ADD
          </Button>
        </View>
      </Container>
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

const mapStateToProps = state => ({
  category: state.category,
});

export default connect(mapStateToProps)(AddCategory);
