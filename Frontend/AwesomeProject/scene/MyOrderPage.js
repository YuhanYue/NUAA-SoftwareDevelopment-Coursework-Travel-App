

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
    this.state = {
      data:[],
      username:[]
    };
  }

  async componentDidMount() {
    this.fetchData();
    //console.log(this.state.review);
    try {//get username who logged in 
      const username = await AsyncStorage.getItem('username');
      this.setState({username: username})//取用户名
      } catch (error) {
       console.log(error); 
      }
   }

   /*
  fetchData = () => {
    var url = 'http://192.168.1.101:3000/route';
    this.setState({loading: true});
    fetch(url)
      .then((res) => res.json()) //转Í化为json
      .then((json) => {
        this.setState({data: json}); //将json数据传递出去，setState会重新调用render()
        //console.log(this.state.data);
      })
      .catch((e) => {
        alert(e);
      });
  };*/

  fetchData() {
    var url = 'http://192.168.1.101:3000/userOrder';
    this.setState({loading: true});
    Axios.post(url ,{
      username: this.state.username
    }).then((response) => {
      console.log(this.state.username);
           this.setState({data: response.data}); //将json数
           console.log(this.state.data)
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
                    {item.routeName}
                  </Text>
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


