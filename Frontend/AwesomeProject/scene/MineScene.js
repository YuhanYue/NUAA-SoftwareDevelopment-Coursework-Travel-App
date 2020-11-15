import React, { Component } from "react";
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ToastAndroid, TextInput,} from "react-native";
//ios端提醒直接用Alert

import OrderView from './OrderView'
import SignUpView from './SignUpView'
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components'

export default class MineScene extends Component{

  async componentDidMount() {
    this.fetchData();
    try {
       const username = await AsyncStorage.getItem('username');
       //console.log("classify page")
       //console.log(username);
       this.setState({username: username})
       //console.log(this.state.username)
       } catch (error) {
        console.log(error); 
       }
    }
    constructor(props) {
      super(props);
      state = {
        username:[],
      }
      //this.username = navigation.getParam('username');
    }
    

  //订单界面
  OrderView = () => {
    this.props.navigator.push({
      scene:OrderView
    })
    };

  //评论界面
  SignUp = ()=>{
    this.props.navigator.push({
      //SignUpScene
      scene: SignUpView
    })
  };

  _pressButton() {
    let _this = this;
    const { navigator } = this.props;
//为什么这里可以取得 props.navigator?请看上文:
//<Component {...route.params} navigator={navigator} />
//这里传递了navigator作为props
    if(navigator) {
        navigator.push({
            name: 'OrderView',
            component: OrderView
        });
    }
}
  render(){
    return (
        
         <View style={styles.container}>   
             <Image style={styles.circleImage} source={require('./image/logo.jpeg')}/>
                <TouchableOpacity style={styles.btnStyle}
                    onPress= {() => {
                      this.props.navigation.push("myOrder", {
                        username:this.state.username
                        //passing data
                      })
                    }} >
                <Text 
                    style={styles.loginText}>我的订单</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStyle}
                    >
                <Text 
                    style={styles.loginText}>我的评论</Text>
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
