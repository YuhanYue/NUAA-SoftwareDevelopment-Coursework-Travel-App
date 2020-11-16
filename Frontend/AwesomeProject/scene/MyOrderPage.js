

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
    data:[],
    username:'',
  };

  async componentDidMount() {
    try {//get username who logged in 
      const username = await AsyncStorage.getItem('username');
      this.setState({username: username})//取用户名
      } catch (error) {
       console.log(error); 
      }
      this.fetchData();
   }


  fetchData() {
    var url = 'http://192.168.1.100:3000/userOrder';
    Axios.post(url ,{
      username: this.state.username, 
    }).then((response) => {
           this.setState({data: response.data}); //将json数
           console.log(this.state.data)
      });
    }

  
  deleteOrder = (item) =>{
      var url = 'http://192.168.1.100:3000/deleteOrder';//ip地址在变化，要注意
      Axios.post(url ,{
        username: this.state.username, 
        routeID: item.routeID,
        //routeID: this.routeID,
      })
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
                    {item.routeName}
                  </Text>
                  {/*<TouchableOpacity onPress = {this.deleteOrder(item)} >*/}
                  <TouchableOpacity>
                    <Text>删除订单</Text>
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


