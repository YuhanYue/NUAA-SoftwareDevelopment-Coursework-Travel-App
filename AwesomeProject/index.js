import React, { Component } from 'react';  
import {  
  AppRegistry,
  TouchableOpacity,
} from 'react-native';  

//Navigator
//import { Navigator } from 'react-native-deprecated-custom-components'
import Cardview from 'react-native-cardview-wayne';

//Scene
import LoginView from './scene/LoginView'
import HomeScene from './scene/HomeScene'
import MessageScreen from './scene/MessageScreen'
import TabBar from './Navigator/TabBar'
import OrderView from './scene/OrderView'
import AppNavigator from './Navigator/AppNavigator'

/*
export default class AwesomeProject extends Component {  //????谁知道这他妈要写项目名啊

  render() {
    return (
      <OrderView/>
    );
  }
}  */

//AppRegistry.registerComponent('loginview', () => loginview)



import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./scene/Home";
import ClassifyScreen from './scene/ClassifyScreen'

import HomeScreen from './scene/HomeScreen';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`
  }
});

const initialState = {
  action: "",
  name: "Stranger",
  avatar: "https://cl.ly/55da82beb939/download/avatar-default.jpg"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...state, action: "openMenu" };
    case "CLOSE_MENU":
      return { ...state, action: "closeMenu" };
    case "UPDATE_NAME":
      return { ...state, name: action.name };
    case "UPDATE_AVATAR":
      return { ...state, avatar: action.avatar };
    case "OPEN_CARD":
      return { ...state, action: "openCard" };
    case "CLOSE_CARD":
      return { ...state, action: "closeCard" };
    case "OPEN_LOGIN":
      return { ...state, action: "openLogin" };
    case "CLOSE_LOGIN":
      return { ...state, action: "closeLogin" };
    case "OPEN_NOTIF":
      return { ...state, action: "openNotif" };
    case "CLOSE_NOTIF":
      return { ...state, action: "closeNotif" };
    default:
      return state;
  }
};

const store = createStore(reducer);

const AwesomeProject = () => (

  <ClassifyScreen />
  /*<ApolloProvider client={client}>
  <Provider store={store}>
    <Home />
  </Provider>
</ApolloProvider>*/

);

export default AwesomeProject;

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);