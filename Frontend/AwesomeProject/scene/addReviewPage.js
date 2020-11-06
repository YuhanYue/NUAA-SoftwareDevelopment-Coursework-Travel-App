//添加评论界面

import Axios from "axios";
import { Text } from "native-base";
import React, {Component} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class addReviewPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      review :'',
      username :'yuhan'
    }
  }
  
  onReviewChanged = (text) => {
    this.setState({review: text})
  };

  addReview = () => {
    var url = 'http://192.168.1.106:3000/addReview';
    Axios.post(url, {
      review :this.state.review,
      username :this.state.username,
      //routeID = this.routeID,
    }).then((response) => {
      //console.log(this.state.review);
    });
    //ToastAndroid.show('添加评论成功!',ToastAndroid.SHORT);
    this.props.navigation.pop();
  }

  render(){
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
      onPress = {this.props.navigation.pop()}
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
