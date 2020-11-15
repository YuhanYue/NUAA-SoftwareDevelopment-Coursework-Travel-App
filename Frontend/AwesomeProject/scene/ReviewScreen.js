

//显示当前路线的评论
import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Axios from "axios"
export default class ReviewScreen extends Component {

  //routeID
  routeID = '';

  constructor(props) {
    super(props);
    this.state = {
      review: ''
    }
  }

  fetchData() {
    var url = 'http://192.168.1.101:3000/review';
    Axios.post(url ,{
      routeID:routeID
    }).then((response) => {
           this.setState({review: response.data}); //将json数
           console.log(this.state.review)
      });
      //console.log(response);
    /*
    fetch(url,{
      routeID: routeID
      //routeID:routeID
    })
      .then((res) => res.json()) //转化为json
      .then((json) => {
        this.setState({review: json}); //将json数据传递出去，setState会重新调用render()
        console.log(this.state.review);
      })
      .catch((e) => {
        alert(e);
      });*/
  }

  componentDidMount() {
    this.fetchData();
    //console.log(this.state.review);
  }

  render() {
    const {navigation} = this.props;
    //const Review = navigation.getParam('Review');//接收数据
    routeID = navigation.getParam('routeID');
    //console.log(routeName)
    return (
      <View>
        <FlatList
          data={this.state.review}
          renderItem={({item}) => (
            <View style={{backgroundColor:'abc123', padding: 10, margin: 10}}>
              <Text styel= {{ color:'#fff', fontWeight:'bold'}}>{item.reviewContent}</Text>
              <Text styel= {{ color:'#fff', fontWeight:'bold'}}>{item.username}</Text>
              <Text styel= {{ color:'#fff', fontWeight:'bold'}}>{item.date}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
