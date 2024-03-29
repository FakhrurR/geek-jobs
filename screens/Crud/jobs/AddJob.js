/* eslint-disable no-alert */
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
import {getCompany} from './../../../redux/actions/company';
import {getCategory} from './../../../redux/actions/category';
import {addJob, getJob} from './../../../redux/actions/job';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      id_category: '',
      salary: '',
      location: '',
      id_company: '',
      isMessage: '',
    };
  }

  componentDidMount() {
    this.getData();
    this.getJob();
  }

  getData = async () => {
    await this.props.dispatch(getCompany());
    await this.props.dispatch(getCategory());
  };

  getJob = async () => {
    await this.props.dispatch(getJob());
  };

  addJobField = async data => {
    await this.props.dispatch(addJob(data));
  };

  handleSubmit = () => {
    let dataJob = {
      name: this.state.name,
      description: this.state.description,
      id_category: this.state.id_category,
      salary: this.state.salary,
      location: this.state.location,
      id_company: this.state.id_company,
    };

    console.log(dataJob);
    this.addJobField(dataJob)
      .then(res => {
        // console.log(res);
        alert('Success Insert Data');
        this.getJob();
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err);
        this.props.navigation.goBack();
      });
  };

  render() {
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
              color: '#fff',
              textAlign: 'center',
            }}>
            CREATE JOB
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          Containerstyle={styles.container}>
          <View style={{marginLeft: 20, marginRight: 20, marginBottom: 80}}>
            <Input
              placeholder="Job Name"
              style={{borderRadius: 30}}
              onChangeText={itemValue => this.setState({name: itemValue})}
              value={this.state.name}
            />
            <Textarea
              rowSpan={5}
              bordered
              placeholder=" Description"
              style={{borderRadius: 30, marginBottom: 10}}
              onChangeText={itemValue =>
                this.setState({description: itemValue})
              }
              value={this.state.description}
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
                style={{width: undefined, borderRadius: null}}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.id_category}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({id_category: itemValue})
                }>
                <Picker.Item label="Select Category" value="" />
                {this.props.category.data.map((v, i) => (
                  <Picker.Item key={i.toString()} label={v.name} value={v.id} />
                ))}
              </Picker>
            </Item>
            <Input
              placeholder="Salary"
              style={{borderRadius: 30, marginBottom: 10}}
              onChangeText={itemValue => this.setState({salary: itemValue})}
              value={this.state.salary}
            />
            <Input
              placeholder="Location"
              style={{borderRadius: 30, marginBottom: 10}}
              onChangeText={itemValue => this.setState({location: itemValue})}
              value={this.state.location}
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
                style={{width: undefined, borderRadius: null}}
                placeholder="Select your Company"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.id_company}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({id_company: itemValue})
                }>
                <Picker.Item label="Select Company" value="" />
                {this.props.company.data.map((v, i) => (
                  <Picker.Item key={i.toString()} label={v.name} value={v.id} />
                ))}
              </Picker>
            </Item>
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
  job: state.job,
  company: state.company,
  category: state.category,
});

export default connect(mapStateToProps)(AddJob);

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
