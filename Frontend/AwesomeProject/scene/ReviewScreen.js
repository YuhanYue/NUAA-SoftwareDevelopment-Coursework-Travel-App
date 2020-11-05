import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

export default class ReviewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: null,
    };
  }

  fetchData() {
    var url = 'http://192.168.1.101:3000/review';
    fetch(url)
      .then((res) => res.json()) //转化为json
      .then((json) => {
        this.setState({review: json}); //将json数据传递出去，setState会重新调用render()
        console.log(this.state.review);
      })
      .catch((e) => {
        alert(e);
      });
  }

  componentDidMount() {
    this.fetchData();
    //console.log(this.state.review);
  }

  render() {
    //const Review = navigation.getParam('Review');//接收数据
    return (
      <View>
        <FlatList
          data={this.state.review}
          renderItem={({item}) => (
            <View style={{backgroundColor:'abc123', padding: 10, margin: 10}}>
              <Text styel= {{ color:'#fff', fontWeight:'bold'}}>{item.reviewID}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
