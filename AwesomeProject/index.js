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
import AppNavigator from './AppNavigator'
import Home from './scene/Home'


export default class AwesomeProject extends Component {  //????谁知道这他妈要写项目名啊

  render() {
    return (
      <TabBar/>
    );
  }
}  

//AppRegistry.registerComponent('loginview', () => loginview)
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);