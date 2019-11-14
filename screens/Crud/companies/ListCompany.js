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

import {getCompany} from './../../../redux/actions/company';

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

  render() {
    // const {data} = this.props.job;
    const {search} = this.state;
    return (
      <Container>
        <ScrollView style={{marginBottom: 20}}>
          <View>
            <Header style={{backgroundColor: '#00b894'}}>
              <Left style={{flex: 1}} />
              <Body>
                <Title
                  style={{
                    fontWeight: '700',
                    color: '#fff',
                  }}>
                  LISTCOMPANY
                </Title>
              </Body>
              <Right style={{flex: 1}} />
            </Header>
            <View style={{backgroundColor: '#00b894'}}>
              <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
                <Text style={style.searchTitle}>Find Company : </Text>
                <Input
                  placeholder="Search..."
                  left
                  icon="search"
                  family="font-awesome"
                  iconSize={14}
                  iconColor="black"
                  style={{borderRadius: 30}}
                />
              </View>
            </View>
            {this.props.company.isLoading && <Spinner />}
            {!this.props.company.isLoading && (
              <View>
                <React.Fragment>
                  <View>
                    {this.props.company.data.map((v, i) => (
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
  company: state.company,
});

export default connect(mapStateToProps)(ListCompany);
