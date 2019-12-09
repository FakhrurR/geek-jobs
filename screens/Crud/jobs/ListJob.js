/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import axios from 'axios';
import {
  Card,
  Button,
  Spinner,
  Item,
  TextInput,
  Header,
  Left,
  Body,
  Right,
  Title,
  Segment,
  Content,
  List,
  ListItem,
  Thumbnail,
  Container,
  CardItem,
} from 'native-base';
// import Shimmer from './../components/Shimmer'
import {Avatar} from 'react-native-elements';
import {Input, Block} from 'galio-framework';
import {Icon} from 'react-native-elements';
import IconBar from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {Drawer} from 'native-base';

import {getJob} from './../../../redux/actions/job';

import {deleteJob} from './../../../redux/actions/job';

class ListJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mQuery: '',
      queryName: '',
      queryCompany: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  closeDrawer = () => {
    this._drawer._root.close();
  };

  openDrawer = () => {
    this._drawer._root.open();
  };

  goToDetail = id => {
    this.props.navigation.navigate('DetailScreen', {id});
  };

  goToProfile = () => {
    this.props.navigation.navigate('ProfileScreen');
  };

  goToSearch = () => {
    this.props.navigation.navigate('SearchScreen');
  };

  goToProfile = () => {
    this.props.navigation.navigate('ProfileScreen');
  };

  componentDidMount() {
    this.getData();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.getData();
    });
  }
  componentWillUnmount () {
    this.focusListener.remove();
  }

  getData = async () => {
    await this.props.dispatch(getJob());
  };

  goToAddJob = () => {
    this.props.navigation.navigate('AddJob');
  };

  queryNameChange = e => {
    const queryName = e.target.value;
    this.setState({queryName});
  };
  queryCompanyChange = e => {
    const queryCompany = e.target.value;
    this.setState({queryCompany});
  };

  deleteItem = id => {
    Alert.alert('Delete Item', 'Are you Sure?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Ok',
        onPress: () => {
          this.props.dispatch(deleteJob(id));
          this.getData();
        },
      },
    ]);
  };

  render() {
    // const {data} = this.props.job;
    const {search} = this.state;
    return (
      <Container>
        <ScrollView style={{marginBottom: 20}}>
          <View>
            <Header style={{backgroundColor: '#043353'}}>
              <Left style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Icon name="times" type="font-awesome" color="white" />
                </TouchableOpacity>
              </Left>
              <Body>
                <Title
                  style={{
                    fontWeight: '700',
                    color: '#fff',
                    alignSelf: 'center',
                  }}>
                  JOBS
                </Title>
              </Body>
              <Right style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.goToAddJob()}>
                  <Icon name="plus" type="font-awesome" color="white" />
                </TouchableOpacity>
              </Right>
            </Header>
            {this.props.job.isLoading && <Spinner />}
            {!this.props.job.isLoading && (
              <View>
                <React.Fragment>
                  <View>
                    {this.props.job.data.map((v, i) => (
                      <Card style={style.card} key={i.toString()}>
                        <View style={style.cardItem}>
                          <View style={{width: 120, height: 40}}>
                            <Image
                              source={{uri: v.logo}}
                              style={style.imageCard}
                            />
                          </View>
                          <View style={{width: 130, height: 30}}>
                            <Text style={style.text}>{v.name}</Text>
                            <Text style={{fontSize: 8}}>{v.location}</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            flex: 1,
                            alignSelf: 'flex-end',
                            marginTop: 20,
                            marginRight: 20,
                          }}>
                          <TouchableOpacity
                            style={{marginRight: 10}}
                            onPress={() =>
                              this.props.navigation.navigate('EditJob', {
                                id: v.id,
                                name: v.name,
                                description: v.description,
                                id_category: v.id_category,
                                salary: v.salary,
                                location: v.id_location,
                                id_company: v.id_company,
                              })
                            }>
                            <Icon
                              name="edit"
                              type="font-awesome"
                              color="blue"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => this.deleteItem(v.id)}>
                            <Icon
                              name="trash"
                              type="font-awesome"
                              color="red"
                            />
                          </TouchableOpacity>
                        </View>
                      </Card>
                    ))}
                  </View>
                </React.Fragment>
              </View>
            )}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  borderCardTop: {
    height: 30,
    width: 130,
  },
  cardItem: {
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    flexDirection: 'row',
  },
  scrollview: {
    flexGrow: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  companyCard: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    padding: 20,
    width: 'auto',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  date: {
    fontSize: 15,
  },
  title: {
    fontSize: 15,
  },
  alert: {
    flex: 1,
    justifyContent: 'center',
  },
  searchSection: {
    margin: 10,
  },
  searchTitle: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: '#fff',
  },
  imageCard: {
    flex: 1,
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

const mapStateToProps = state => ({
  job: state.job,
  company: state.company,
});

export default connect(mapStateToProps)(ListJob);
