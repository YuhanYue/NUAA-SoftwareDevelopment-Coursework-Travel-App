import React, { Component } from "react";
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ToastAndroid, TextInput} from "react-native";
//ios端提醒直接用Alert

import Home from './Home';
import Axios from 'axios';
//import { response } from "express";




export default class SignUpView extends Component{
  username = '';
  password = '';
  repassword = '';

  onUsernameChanged = (newUsername) => {
    this.username = newUsername;
  };

  onPasswordChanged = (newPassword) => {
    this.password = newPassword;
  };

  onRePasswordChanged = (newRePassword) => {
    this.repassword = newRePassword;
  };
   
  Register = () =>{
    //检查用户名是否可用/两次密码是否一致
    if (this.repassword == this.password) {
      var url = 'http://192.168.1.108:3000/register';
      Axios.post(url ,{
      username: this.username,
      passwd: this.password,
    }).then((response) => {
      console.log(response);
    });
      ToastAndroid.show('注册成功',ToastAndroid.SHORT);
      this.props.navigation.pop()
    } else{
      ToastAndroid.show('两次密码输入不一致!',ToastAndroid.SHORT);
    }
  }

  render(){
  return (
    <View style={styles.container}>   
        {/*<Image style={styles.circleImage} source={require('./image/logo.jpeg')}/>*/}
        <TextInput
            onChangeText={this.onUsernameChanged}//绑定文本变化的回调函数
            style={styles.textInput}
            placeholder={'请输入用户名'}
            //输入框下划线
            underlineColorAndroid={'transparent'}/>
        <TextInput
            onChangeText={this.onPasswordChanged}
            style={styles.textInput}
            placeholder={'请输入密码'}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}/>
         <TextInput
            onChangeText={this.onRePasswordChanged}
            style={styles.textInput}
            placeholder={'请再次输入密码'}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}/>   
        <TouchableOpacity style={styles.btnStyle}
        onPress={this.Register}>
          <Text 
              style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity> 
    </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//充满容器
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    //设置次轴的对齐方式
    alignItems: 'center',
},
  textInput: {
    height: 50,
    width: 200,
    marginBottom: 5,
    backgroundColor: 'white',
    textAlign: 'center',
},
btnStyle: {//bottom
  height: 40,
  width:  200 - 32,
  borderRadius: 5,
  marginTop: 20,
  backgroundColor: '#4398ff',
  //沿主轴方向居中
  justifyContent: 'center',
},
loginText: {
  //指定文本的对齐方式
  textAlign: 'center',
  color: 'white',
  //设置文本垂直方向居中
  textAlignVertical: 'center'},
  canNot: {
    width: 200 - 32,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    //设置主轴为两端对齐
    justifyContent: 'space-between',
},
});
