

//查看并删除我的订单


import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator, AsyncStorage} from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text, Left, Body} from 'native-base';
import lodash from 'lodash';
import _ from 'lodash';
import SectionScreen from './SectionScreen'
import Axios from "axios"

export default class MyFavoritePage extends Component {
  constructor(props) {
    super(props);
  }
 state = {
    data:[],
    username:'',
  };

  async componentDidMount() {
    try {
      const username = await AsyncStorage.getItem('username');
      this.setState({username: username})
      } catch (error) {
      }
      this.fetchData();
      //console.log(this.state.data)
  }


  fetchData() {
    var url = 'http://192.168.1.100:3000/userReview';
    Axios.post(url ,{
      username: this.state.username
    }).then((response) => {
           this.setState({data: response.data});
      });
    }

    //delete specified review
    deleteReview = (item) =>{
      var url = 'http://192.168.1.100:3000/deleteReview';
      Axios.post(url ,{
        username: this.state.username, 
        reviewID: item.reviewID,
      })
    }


  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View>
                  <Text styel={{color: '#fff', fontWeight: 'bold'}}>
                    {item.reviewContent}
                  </Text>
                  <TouchableOpacity onPress = {this.deleteReview(item)}>
                    <Text>删除评论</Text>
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
