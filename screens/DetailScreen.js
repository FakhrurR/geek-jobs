/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import { Divider } from 'react-native-elements';
import {Button} from 'galio-framework';
import {connect} from 'react-redux';

import {getJobId} from '../redux/actions/job';
import {Spinner} from 'native-base';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id: props.navigation.getParam('id'),
    };
  }

  static navigationOptions = {
    headerTitleStyle: {
      flex: 1,
      textAlign: 'left',
    },
    backgroundColor: '#00b894',
    title: 'Job Details',
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.getData(id);
  }

  getData = id => {
    this.props.dispatch(getJobId(id));
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
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View>
                          <Image
                            source={{uri: v.logo}}
                            style={{
                              flex: 1,
                              width: 120,
                              height: 50,
                              marginTop: 5,
                              marginLeft: 20,
                              resizeMode: 'contain',
                              borderRadius: 30,
                            }}
                          />
                        </View>
                        <View
                          style={{marginTop: 10, marginLeft: 10, width: 150}}>
                          <Text
                            style={{
                              marginBottom: 10,
                              fontWeight: '700',
                              fontSize: 15,
                            }}>
                            {v.name}
                          </Text>
                          <Text style={{fontWeight: '700'}}>Company Name</Text>
                          <Text>{v.company}</Text>
                          <Text style={{fontWeight: '700'}}>Published</Text>
                          <Text>{v.date_added}</Text>
                        </View>
                      </View>
                      {/* bottomLayout */}
                      <View
                        style={{
                          marginTop: 40,
                          marginLeft: 10,
                        }}>
                        <Text
                          style={{
                            fontWeight: '700',
                            marginTop: -30,
                            fontSize: 15,
                          }}>
                          Location
                        </Text>
                        <Text style={{marginBottom: 10}}>{v.location}</Text>
                        <Text style={{fontWeight: '700', fontSize: 15}}>
                          Salary
                        </Text>
                        <Text style={{marginBottom: 10}}>Rp.{v.salary}</Text>
                        <Text
                          style={{
                            fontWeight: '700',
                            fontSize: 15,
                          }}>
                          Description
                        </Text>
                        <Text style={{marginBottom: 10}}>{v.description}</Text>
                      </View>
                    </View>
                  ))}
              </React.Fragment>
            )}
          </ScrollView>
        </View>
        <View style={{position: 'absolute'}}>
          <Button style={{width: 100}}>APPLY NOW</Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job,
});

export default connect(mapStateToProps)(DetailScreen);
