/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {getJobId} from '../redux/actions/job';
import {Spinner} from 'native-base';
import {getCompany, getCompanyById} from '../redux/actions/company';

class DetailCompany extends Component {
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
    title: 'Detail Company',
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.getData(id);
  }

  getData = id => {
    this.props.dispatch(getCompanyById(id));
  };

  render() {
    return (
      <View>
        <ScrollView>
          {this.props.company.isLoading && <Spinner />}

          {!this.props.company.isLoading && (
            <React.Fragment>
              {this.props.company.data
                .filter(data => data.id === this.state.id)
                .map((v, i) => (
                  <View key={i.toString()}>
                    {/* topLayout */}
                    <View>
                      <View>
                        <Image
                          source={{uri: v.logo}}
                          style={{
                            flex: 1,
                            width: 300,
                            height: 200,
                            marginTop: 20,
                            marginLeft: 10,
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                    </View>
                    {/* bottomLayout */}
                    <View
                      style={{
                        marginTop: 40,
                        marginLeft: 10,
                        alignItems: 'center',
                      }}>
                      <Text style={{fontWeight: '700'}}>Company Name</Text>
                      <Text style={{marginBottom: 10}}>{v.name}</Text>
                      <Text style={{fontWeight: '700'}}>Location</Text>
                      <Text style={{marginBottom: 10}}>{v.location}</Text>
                      <Text style={{fontWeight: '700'}}>Description</Text>
                      <Text style={{marginBottom: 10}}>{v.description}</Text>
                    </View>
                  </View>
                ))}
            </React.Fragment>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps)(DetailCompany);
