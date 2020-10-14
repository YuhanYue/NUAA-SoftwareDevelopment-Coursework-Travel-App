import React, { Component } from 'react';  
import {  
  AppRegistry,
  TouchableOpacity,
} from 'react-native';  

//Navigator
import { Navigator } from 'react-native-deprecated-custom-components'
import Cardview from 'react-native-cardview-wayne';

//Scene
import LoginView from './scene/LoginView'
import HomeScene from './scene/HomeScene'
import MessageScreen from './scene/MessageScreen'
import TabBar from './scene/TabBar'
import OrderView from './scene/OrderView'


export default class AwesomeProject extends Component {  //????谁知道这他妈要写项目名啊

  //第一次调用的时候，第一个参数route就是initialRoute
  renderScene = (route, navigator) => {
    return(
      <route.scene //这里返回route中包含的场景，在界面上渲染该场景
        navigator={navigator}/>//并且将navigator作为一个参数传递给这个场景，以便在这个场景中做场景跳转
    );
  }

  //默认的route数据，其中必须包含第一次需要渲染的场景，不然显示啥？
  initialRoute = {
    scene:  OrderView,//LoginView
    //你也可以在这里继续添加其他数据，然后在renderScene中取出，用于场景的数据传递，不展开叙述这个了！
  }

  render() {
    return (
      <Navigator
        initialRoute={this.initialRoute}
        renderScene={this.renderScene}/>
    );
  }
}  

//AppRegistry.registerComponent('loginview', () => loginview)
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);