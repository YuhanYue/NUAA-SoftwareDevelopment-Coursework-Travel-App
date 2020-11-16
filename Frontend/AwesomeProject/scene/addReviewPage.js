//添加评论界面

import Axios from "axios";
import { response } from "express";
import React, {Component} from "react";
import {View,Text, TextInput, StyleSheet, TouchableOpacity, AsyncStorage} from "react-native";


export default class addReviewPage extends Component {

  routeID = '';


  constructor(props) {
    super(props);
  }
  
  async componentDidMount() {
    try {//get username who logged in 
      const username = await AsyncStorage.getItem('username');
      this.setState({username: username})//取用户名
      } catch (error) {
       console.log(error); 
      }
     
   }


  state = {
    review :'',
    username :''
  }

  onReviewChanged = (text) => {
    this.setState({review: text})
  };

  /*
  addReview = () => {
    var url = 'http://192.168.1.100:3000/addReview';
    Axios.post(url, {
      review :this.state.review,
      username :this.state.username,
      //routeID = this.routeID,
    }).then((response) => {
      //console.log(this.state.review);
    });
    //ToastAndroid.show('添加评论成功!',ToastAndroid.SHORT);

  }*/

  addReview = () =>{
    var url = 'http://192.168.1.100:3000/addReview';
    Axios.post(url ,{
      username: this.state.username, 
      review: this.state.review,
      routeID: routeID
    }).then((response)=>{
    });
  }

  

  render(){
    const {navigation} = this.props;
    //const Review = navigation.getParam('Review');//接收数据
    routeID = navigation.getParam('routeID');
    console.log(routeID)

    return(
    <View>
      <TextInput 
        onChangeText = {this.onReviewChanged}
        style = {styles.textInput}
        placeholder = {'请添加新的评论...'}
        //underlineColorAndroid={'transparent'}
        />
      <TouchableOpacity style  = {styles.btnStyle}
      onPress = {this.addReview}
      >
        <Text>点击添加</Text>
      </TouchableOpacity>

      <TouchableOpacity style  = {styles.btnStyle}
      >
        <Text>取消</Text>
      </TouchableOpacity>
    </View>
    );
  }
} 

const styles = StyleSheet.create({
  btnStyle: {//bottom
    height: 40,
    width:  200 - 32,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#4398ff',
    //沿主轴方向居中
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 200,
    marginBottom: 5,
    backgroundColor: 'white',
    textAlign: 'center',
}
});
