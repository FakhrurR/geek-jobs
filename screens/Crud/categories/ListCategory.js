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
import {Modal} from 'react-native';
// import Shimmer from './../components/Shimmer'
import {Avatar} from 'react-native-elements';
import {Input, Block} from 'galio-framework';
import {Icon} from 'react-native-elements';
import IconBar from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {Drawer} from 'native-base';
import AddCategory from './AddCategory';

import {getCategory} from './../../../redux/actions/category';
import {addCategory} from './../../../redux/actions/category';
import {
  deleteCategory,
  updateCategory,
} from './../../../redux/actions/category';

class ListCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mQuery: '',
      isOpenAdd: false,
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.getData();
    const {navigation} = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('didFocus', () => {
      this.getData();
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  getData = async () => {
    await this.props.dispatch(getCategory());
  };

  goToAddCategory = () => {
    this.props.navigation.navigate('AddCategory');
    // this.setState({isOpenAdd: true});
  };

  // editItem = async id => {
  //   this.props.navigation.navigate('EditCategory', {id});
  // };

  deleteItem = id => {
    Alert.alert('Delete Item', 'Are you Sure?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'Ok',
        onPress: async () => {
          await this.props.dispatch(deleteCategory(id));
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
                  <Icon
                    name="times"
                    type="font-awesome"
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>
              </Left>
              <Body>
                <Title
                  style={{
                    fontWeight: '700',
                    color: '#fff',
                  }}>
                  CATEGORY
                </Title>
              </Body>
              <Right style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.goToAddCategory()}>
                  <Icon name="plus" type="font-awesome" color="white" />
                </TouchableOpacity>
              </Right>
            </Header>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.isOpenAdd}>
              <AddCategory />
            </Modal>
            {this.props.category.isLoading && <Spinner />}
            {!this.props.category.isLoading && (
              <View>
                <React.Fragment>
                  <View>
                    {this.props.category.data.map((v, i) => (
                      <Card style={style.card} key={i.toString()}>
                        <View style={style.cardItem}>
                          <View style={{width: 200, height: 30}}>
                            <Text style={style.text}>{v.name}</Text>
                          </View>
                          <TouchableOpacity
                            style={{marginRight: 10}}
                            onPress={() =>
                              this.props.navigation.navigate('EditCategory', {
                                id: v.id,
                                name: v.name,
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
    borderRadius: 10,
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
  category: state.category,
});

export default connect(mapStateToProps)(ListCategory);
