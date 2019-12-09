/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, ScrollView, Text, StyleSheet} from 'react-native';
import {Divider, Avatar} from 'react-native-elements';
import {Button} from 'native-base';
import {Icon} from 'galio-framework';
import {connect} from 'react-redux';
import IconBar from 'react-native-vector-icons/FontAwesome5';

import {getJobId} from '../redux/actions/job';
import {Spinner, Header, Title, Left, Body, Right} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id: props.navigation.getParam('id'),
      name: props.navigation.getParam('name'),
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.getData(id);
  }

  getData = id => {
    this.props.dispatch(getJobId(id));
  };

  convertTime = time => {
    let strSplitDate = String(time).split(' ');
    let date = new Date(strSplitDate[0]);

    let dd = date.getDate();
    let mm = date.getMonth() + 1;

    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = dd + '/' + mm + '/' + yyyy;
    return date.toString();
  };
  render() {
    return (
      <View>
        <View style={{position: 'relative'}}>
          <ScrollView>
            {this.props.job.isLoading && <Spinner />}

            {!this.props.job.isLoading && (
              <React.Fragment>
                {this.props.job.data
                  .filter(data => data.id === this.state.id)
                  .map((v, i) => (
                    <View key={i.toString()}>
                      {/* topLayout */}
                      <Header style={{backgroundColor: '#043353'}}>
                        <Left>
                          <TouchableOpacity
                            transparent
                            style={{marginLeft: 10}}
                            onPress={() => this.props.navigation.goBack()}>
                            <IconBar name="times" color="white" size={20} />
                          </TouchableOpacity>
                        </Left>
                        <Right />
                      </Header>
                      <View
                        style={{
                          width: '100%',
                          height: 180,
                          backgroundColor: '#043353',
                          borderBottomLeftRadius: 50,
                          borderBottomRightRadius: 50,
                        }}>
                        <View
                          style={{
                            width: 130,
                            height: 120,
                            marginTop: 10,
                            borderRadius: 30,
                            overflow: 'hidden',
                            backgroundColor: 'white',
                            alignSelf: 'center',
                            borderWidth: 3,
                            borderColor: 'white',
                          }}>
                          <Image
                            source={{uri: v.logo}}
                            style={{
                              width: 120,
                              height: 120,
                              alignSelf: 'center',
                              alignItems: 'center',
                              resizeMode: 'contain',
                            }}
                          />
                        </View>
                        <View style={{alignItems: 'center', marginTop: 10}}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              color: 'white',
                            }}>
                            {' '}
                            {v.company}{' '}
                          </Text>
                        </View>
                      </View>
                      {/* bottomLayout */}
                      <View
                        style={{
                          marginTop: 40,
                          marginLeft: 10,
                        }}>
                        <View style={{marginTop: -20}}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 30,
                              flexShrink: 1,
                            }}>
                            {v.name}
                          </Text>
                          <Text style={{color: 'gray'}}>
                            Published: {this.convertTime(v.date_updated)}
                          </Text>
                        </View>
                        <Text
                          style={{
                            marginTop: 10,
                            fontWeight: '700',
                            fontSize: 20,
                          }}>
                          Location
                        </Text>
                        <Text style={{marginBottom: 10}}>{v.location}</Text>
                        <Text style={{fontWeight: '700', fontSize: 20}}>
                          Salary
                        </Text>
                        <Text style={{marginBottom: 10}}>Rp.{v.salary}</Text>
                        <Text
                          style={{
                            fontWeight: '700',
                            fontSize: 20,
                          }}>
                          Description
                        </Text>
                        <Text style={{marginBottom: 10}}>{v.description}</Text>
                      </View>
                      <Button block style={{backgroundColor: '#E44652'}}>
                        <Text style={{color: 'white'}}>APPLY NOW</Text>
                      </Button>
                    </View>
                  ))}
              </React.Fragment>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job,
});

const styles = StyleSheet.create({
  ImageTopBack: {
    resizeMode: 'cover',
    height: 130,
    width: '100%',
  },
});

export default connect(mapStateToProps)(DetailScreen);
