

//查看并删除我的订单


import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text, Left, Body} from 'native-base';
import lodash from 'lodash';
import _ from 'lodash';
import SectionScreen from './SectionScreen'

export default class MyOrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount() {
    this.fetchData();
    //console.log(this.state.review);
  }

  fetchData = () => {
    var url = 'http://192.168.1.106:3000/route';
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
  };


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
