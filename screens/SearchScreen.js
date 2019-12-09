/* eslint-disable no-undef */
/* eslint-disable no-sparse-arrays */
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
  ActionSheet,
  Picker,
} from 'native-base';
// import Shimmer from './../components/Shimmer'
import {Avatar} from 'react-native-elements';
import {Input, Block} from 'galio-framework';
import {Icon, SearchBar, Overlay} from 'react-native-elements';
import IconBar from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {Drawer} from 'native-base';

import {getJob} from './../redux/actions/job';
import {getJobSearch} from './../redux/actions/job';
import {getJobOrderBy} from './../redux/actions/job';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mQuery: 'date_updated',
      queryName: '',
      queryCompany: '',
      data: [],
      order: '',
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

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await this.props.dispatch(getJob());
  };

  queryNameChange = textName => {
    const lowQuery = textName.toLowerCase();
    console.log('textInsearch : ' + lowQuery);
    this.setState({queryName: lowQuery});
  };

  queryCompanyChange = text => {
    const lowQuery = text.toLowerCase();
    console.log('textInsearch : ' + lowQuery);
    this.setState({queryCompany: lowQuery});
  };

  doSearch = (name, company) => {
    this.props.dispatch(getJobSearch(name, company));
  };

  getJobOrderBy = mQuery => {
    this.props.dispatch(getJobOrderBy(mQuery));
  };

  goToMain = () => {
    this.props.navigation.navigate('MainScreen');
  };

  mQueryOrderByChange = text => {
    console.log('order : ' + text);
    this.setState({mQuery: text});
  };
  render() {
    return (
      <Container>
        <ScrollView style={{marginBottom: 20}}>
          <View>
            <Header style={{backgroundColor: '#043353'}}>
              <Left style={{flex: 1}}>
                <TouchableOpacity transparent onPress={() => this.goToMain()}>
                  <IconBar
                    name="times"
                    type="font-awesome"
                    color="#fff"
                    size={15}
                  />
                </TouchableOpacity>
              </Left>
              <Body>
                <Title
                  style={{
                    alignItems: 'center',
                    alignContent: 'center',
                    fontWeight: '700',
                    color: '#fff',
                  }}>
                  Find Jobs
                </Title>
              </Body>
              <Right style={{flex: 1}}>
              </Right>
            </Header>
            <View>
              <View style={{marginLeft: 10, marginRight: 10}}>
                <Input
                  placeholder="Search..."
                  left
                  icon="search"
                  family="font-awesome"
                  iconSize={14}
                  iconColor="black"
                  style={{borderRadius: 30}}
                  onChangeText={this.queryNameChange}
                  onSubmitEditing={() => this.doSearch(this.state.queryName)}
                  value={this.state.queryName}
                />
              </View>
              <View>
              <Picker
                  selectedValue={this.state.mQuery}
                  style={{marginLeft: 20, marginRight: 20, borderBottomWidth: 20}}
                  onValueChange={(itemValue, itemIndex) => {
                    //  this.setState({mQuery: itemValue})
                    this.mQueryOrderByChange(itemValue);
                    this.getJobOrderBy(this.state.mQuery);
                  }}>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="Name" value="name" />
                  <Picker.Item label="Company" value="company" />
                  <Picker.Item label="Latest" value="date_updated" />
                </Picker>
              </View>
            </View>
            {this.props.job.isLoading && <Spinner />}
            {!this.props.job.isLoading && (
              <View>
                <React.Fragment>
                  <View>
                    {this.props.job.data.map((v, i) => (
                      <TouchableOpacity
                        key={i.toString()}
                        onPress={() => this.goToDetail(v.id)}>
                        <Card style={style.card}>
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
                        </Card>
                      </TouchableOpacity>
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
    fontSize: 10,
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
    borderRadius: 30,
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

export default connect(mapStateToProps)(SearchScreen);
