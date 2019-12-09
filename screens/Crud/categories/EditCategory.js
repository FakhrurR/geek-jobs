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
import {getCategory , updateCategory} from './../../../redux/actions/category';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      name: this.props.navigation.getParam('name'),
      id: this.props.navigation.getParam('id'),
    };
  }

  static navigationOptions = {
    header: null,
  };

  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }

  updateCategory = async (id, data) => {
    await this.props.dispatch(updateCategory(id, data));
  };

  getData = async () => {
    await this.props.dispatch(getCategory());
  };

  handleSubmit = () => {
    let data = {
      name: this.state.name,
    };
    let id = this.state.id;
    console.log(id, data);
    this.updateCategory(id, data)
      .then(res => {
        console.log(res);
        alert('Success to Edit Category');
        this.getData();
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleCategoryChange = text => {
    console.log('password :' + text);
    this.setState({name : text});
  };

  render() {
    return (
      <Container>
        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => this.props.navigation.goBack()}>
          <Icon name="times" size={20} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={{fontWeight: '700', fontSize: 25, marginBottom: 20}}>
            EDIT CATEGORY
          </Text>
          <Input
            placeholder="Category Name"
            style={{borderRadius: 30}}
            onChangeText={this.handleCategoryChange}
            defaultValue={this.state.name}
          />
          <Button
            style={{borderRadius: 20}}
            onPress={() => this.handleSubmit()}>
            Edit
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
