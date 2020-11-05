/*import { typeAlias } from '@babel/types';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighLight,
  ScrollView
} from 'react-native';
//icons
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, { Easing } from 'react-native-reanimated';
const { Value, timing } = Animated;


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SearchBar extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      isFocoused: false,
      keyWord:'',
    }

    //Animation values
    this._input_box_translate_x = new Value(width);
    this._back_button_opacity = new Value(0);
    this._content_translate_y = new Value(height);
    this._content_opacity = new Value(0);

  }

  onFocus = () =>{

  }

  onBlur = () =>{

  }

  render() {
    return (
      <>
      <View style = {styles.header}>
        <View style = {styles.header_inner}>
          <View>
            <Image
            source = {require('./image/logo.jpeg')}
            style ={{width: 152, height: 30}}
            />
          </View>
          <TouchableHighLight
          activeOpacity = {1}
          underlayColor = {'#ccd0d5'}
          onPress = {this.onFocus}
          style = {styles.search_icon_box}>
            <Icon name ="search" size = {22} color = '#000000' />
          </TouchableHighLight>
        <Animated.View 
        style = { [ styles.input_box, {transfor: [{ translateX: this._input_box_translate_x}]}]}>
          <Animated.View style = {{ opacity: this._back_button_opacity }}>
            <TouchableHighLight
            activeOpacity = {1}
            underlayColor = {'#ccd0d5'}
          onPress = {this.onBlur}
          style = {styles.back_icon_box}>

             <Icon name = "chevron-left" size = {22} color = '#000000' />
            </TouchableHighLight>
          </Animated.View>
          <TextInput
          ref = "input"
          placeholder = "Search Route"
          clearButtonMode = "always"
          value = {this.state.keyWord}
          onChangeText = {(value) => this.setState({keyWord: value})}
          style = {styles.input}
          />
        </Animated.View>
        </View>
      </View>

      <Animated.View style = {[styles.content, {opacity: this._content_opacity, transform: [{ translateY: this._content_translate_y}] }]}>
        <View >
      </Animated.View>
      </>
    )
  }
}

export default SearchBar

const styles= StyleSheet.create({
  header: {
    height: 50,
    paddingHorizontal: 16
  },
  header_inner:{
    flex: 1,
    overflow:'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  search_icon_box:{
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input_box:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width -32
  },
  _back_button_opacity:{

  },
  back_icon_box:{

  },
  input: {

  },
  content: {

  }

})*/
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
    };
  }
  componentDidMount() {
    this.fetchData();
    //console.log(this.state.review);
  }

  fetchData = () => {
    var url = 'http://192.168.1.101:3000/route';
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
