

//查看并删除我的订单


import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator, AsyncStorage} from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text, Left, Body} from 'native-base';
import lodash from 'lodash';
import _ from 'lodash';
import SectionScreen from './SectionScreen'
import Axios from "axios"

export default class MyOrderPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [],
    username:'',
  }

  async componentDidMount() {
    try {//get username who logged in 
      const username = await AsyncStorage.getItem('username');
      this.setState({username: username})//取用户名
      } catch (error) {
       console.log(error); 
      }
      this.fetchData();
      console.log(this.state.data)
   }

   fetchData() {
    var url = 'http://192.168.1.100:3000/getFavorite';
    Axios.post(url ,{
      username: this.state.username, 
    }).then((response) => {
           this.setState({data: response.data}); //将json数
      });
    }



  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View
                style={{backgroundColor: 'abc123', padding: 10, margin: 10}}>
                  <Text styel={{color: '#fff', fontWeight: 'bold'}}>
                    {item.routeID}
                  </Text>
                  <TouchableOpacity>
                    <Text>查看路线</Text>
                  </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            //ListFooterComponent = {this.renderFooter}
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
