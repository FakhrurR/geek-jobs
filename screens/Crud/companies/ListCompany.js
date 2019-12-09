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
  SwipeRow,
} from 'native-base';
// import Shimmer from './../components/Shimmer'
import {Avatar} from 'react-native-elements';
import {Input, Block} from 'galio-framework';
import {Icon} from 'react-native-elements';
import IconBar from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {Drawer} from 'native-base';

import {getCompany} from './../../../redux/actions/company';
import {deleteCompany} from './../../../redux/actions/company';

class ListCompany extends Component {
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

  componentWillUnmount() {
    this.focusListener.remove();
  }

  getData = async () => {
    await this.props.dispatch(getCompany());
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
          this.props.dispatch(deleteCompany(id));
          this.getData();
        },
      },
    ]);
  };

  goToAddCompany = () => {
    this.props.navigation.navigate('AddCompany');
  };

  render() {
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
                  }}>
                  COMPANY
                </Title>
              </Body>
              <Right style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.goToAddCompany()}>
                  <Icon name="plus" type="font-awesome" color="white" />
                </TouchableOpacity>
              </Right>
            </Header>
            {this.props.company.isLoading && <Spinner />}
            {!this.props.company.isLoading && (
              <View>
                <React.Fragment>
                  <View>
                    {this.props.company.data.map((v, i) => (
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
                              this.props.navigation.navigate('EditCompany', {
                                id: v.id,
                                name: v.name,
                                logo: v.logo,
                                location: v.location,
                                description: v.description,
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
    borderRadius: 20,
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
  company: state.company,
});

export default connect(mapStateToProps)(ListCompany);
