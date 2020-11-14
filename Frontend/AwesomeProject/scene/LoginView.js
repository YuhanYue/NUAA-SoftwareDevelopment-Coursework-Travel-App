import React, { Component } from "react";
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ToastAndroid, TextInput, AsyncStorage} from "react-native";
//ios端提醒直接用Alert

import HomeScene from './Home'
import SignUpView from './SignUpView'
import TabNavigator from "../Navigator/TabNavigator";
import {createBottomTabNavigator} from "react-navigation-tabs";
//import {createStackNavigator} from 'react-navigation-stack'
import ClassifyScreen from "./ClassifyScreen";
import Axios from "axios";
import { object } from "prop-types";
//import { response } from "express";



const userInfo = {username:'123',password:'123'}

 
function mapDispatchToProps(dispatch) {
  return {
    updateUsername:(uername) =>
      dispatch({
        type:"UPDATE_USERNAME",
        username
      })
  }
}
export default class LoginView extends Component{


  constructor(props){
    super(props);
    this.state = {
      username:'',
    }
  }

componentDidMount() {
  this.retrieveUsername();
}
  
  onUsernameChanged = (newUsername) => {
    this.username = newUsername;
    //update state usernmae
  };

  onPasswordChanged = (newPassword) => {
    this.password = newPassword;
  };


  //store Data
  storeUsername = async username => {
    try {
        await AsyncStorage.setItem("username", username)
    }catch(error) {}
  } 

  retrieveUsername = async () => {
    try{
      const username = await AsyncStorage.getItem("username")
      if(username !== null){
        console.log(username);
        this.props.updateUsername(username);
      }
    }catch(error){}
    
  }

  //登陆跳转
  login = () => {
    /*if(userInfo.username == this.state.username && userInfo.password == this.state.password){
      //alert('Logged In')
      await AsyncStorage.setItem('isLoggedIn', '1');//check whether is logged in or not
      this.props.navigation.replace("Tab");
    } else{
      alert('Username or Password is incorrect')
    }*/
    //下面这段要
    var url = 'http://192.168.1.106:3000/login';//ip地址在变化，要注意
    Axios.post(url ,{
      username: this.username, 
      passwd: this.password,
    }).then((response) => {
      if(response.data.message){
        ToastAndroid.show('wrong username/password combination!',ToastAndroid.SHORT);
      } else{
        this.storeUsername(this.username)
        //console.log(this.username)
        this.props.navigation.replace("Tab");
        //.log(username);
        this.retrieveUsername();
        ToastAndroid.show('登录成功',ToastAndroid.SHORT);
      }
      //console.log(response);
    });



    /*if (this.username == 'admin' && this.password == '123') {
      this.props.navigation.replace("Tab")
      ToastAndroid.show('登录成功',ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('wrong username/password combination!',ToastAndroid.SHORT);
    }*/
    /*fetch('', {

    }).then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      })
      .catch((error)=>{
        console.error(error);
      });*/
  };
  
  //注册跳转
  SignUp = ()=>{
    this.props.navigation.push("SignUp")
  }

  //忘记密码跳转
  ForgetPasswd = () =>{
    this.props.navigation.push("")
  }
  
  render(){
  return (
    <View style={styles.container}>   
        <Image style={styles.circleImage} source={require('./image/logo.jpeg')}/>
        <TextInput
            //onChangeText= {(username)=>this.setState({username})}
            //value={this.state.username}
            onChangeText={this.onUsernameChanged}//绑定文本变化的回调函数
            style={styles.textInput}
            placeholder={'username'}
            //输入框下划线
            underlineColorAndroid={'transparent'}/>
        <TextInput
            //onChangeText= {(password)=>this.setState({password})}
            //value={this.state.password}
            onChangeText={this.onPasswordChanged}
            style={styles.textInput}
            placeholder={'password'}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}/>
        <TouchableOpacity style={styles.btnStyle}
        onPress={this.login}>
          <Text 
              style={styles.loginText}>login</Text>
        </TouchableOpacity>

        {/*无法登录  新用户*/}
            <View style={styles.canNot}>
              <TouchableOpacity
                onPress={ () => {this.props.navigation.push("SignUp")}}>
                <Text style={{color: '#4398ff'}}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.ForgetPasswd}>
                <Text style={{color: '#4398ff'}}>Help</Text>
              </TouchableOpacity> 
            </View>
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
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 100,
    marginBottom: 25,
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
