//Search Page

import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text, Left, Body} from 'native-base';
import lodash from 'lodash';
import _ from 'lodash';
import SectionScreen from './SectionScreen'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
      fullData: [],//所有数据
      error: null,
      loading: false,
      query: '',
      username:[],
    };
  }

  async componentDidMount() {
    this.fetchData();
    try {
       const username = await AsyncStorage.getItem('username');
       //console.log("classify page")
       //console.log(username);
       this.setState({username: username})
       //console.log(this.state.username)
       } catch (error) {
        console.log(error); 
       }
    }

  fetchData = () => {
    var url = 'http://192.168.1.100:3000/route';
    this.setState({loading: true});
    fetch(url)
      .then((res) => res.json()) //转化为json
      .then((json) => {
        this.setState({data: json, loading: false, fullData: json}); //将json数据传递出去，setState会重新调用render()
        //console.log(this.state.data);
      })
      .catch((e) => {
        this.setState({error, loading: false});
        alert(e);
      });
  };

  handleSearch = (text) => {
    const formattedQuery = text;
    const data = _.filter(this.state.fullData , (route) => {
      if (route.routeName.includes(formattedQuery)) {
        //console.log(formattedQuery)
        //console.log(route.routeName)
        return true;
      }
      return false;
    });
    this.setState({data, query: text});
    //console.log(data)
  };

//根据routeID跳转
  renderFooter = () => {
    if(!this.state.loading)  return null;
    return (
      <View style = {{paddingVertical: 20, borderTopWidth: 1, borderColor: '#CED0CE' }}>
        <ActivityIndicator animating size ="large" />
      </View>
    )
  }
  _renderItem = ({item, index}) => {  //youtube:https://www.youtube.com/watch?v=odclIcBzxAc
      return (
        <Body>
          <Text>{item.routeName}</Text>
        </Body>
      )
  }



  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.handleSearch} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View
                style={{backgroundColor: 'abc123', padding: 10, margin: 10}}>
                <TouchableOpacity onPress = {() => {
                  this.props.navigation.push("Section", {
                    routeID: item.routeID,
                    section: cards
                    //passing data
                  })
                }}>
                  <Text styel={{color: '#fff', fontWeight: 'bold'}}>
                    {item.routeName}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent = {this.renderFooter}
          />
        </View>
      </Container>
    );
  }
}


const cards = [
  {
    title: 'React Native',
    image: require('../image/test.jpeg'),
    subtitle: 'text',
    caption: '1 to 12',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'React Native',
    image: require('../image/test.jpeg'),
    subtitle: 'react-Native',
    caption: '1 to 12',
    logo: require('../assets/logo-react.png'),
  },
];
