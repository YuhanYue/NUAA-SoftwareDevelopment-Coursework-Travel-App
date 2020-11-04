
import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../scene/Home';
//import MineScene from '../scene/MineScene'
import ClassfiyScreen from '../scene/ClassifyScreen'
import SectionScreen from '../scene/SectionScreen'
import LoginView from "../scene/LoginView";
import ReviewScreen from "../scene/ReviewScreen";
import { renderToStringWithData } from "react-apollo";



const activeColor = "#4775f2";
const inactiveColor = "#b8bece";


const HomeStack = createStackNavigator(
  {
    Home: Home,
    Review: ReviewScreen
  }
);

HomeStack.navigationOptions = ({ navigation }) => {

  var tabBarVisible = true;//by default
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  
  return {
    
    tabBarVisible,
    tabBarLabel: "Explore",

    tabBarIcon: ({ focused }) => (
      <Icon name="Close" size={30} color={
        focused ? activeColor : inactiveColor} 
        />
    )
  };
};


const ClassifyStack= createStackNavigator(
  {
    Classify: ClassfiyScreen,
    Section: SectionScreen,
    Home: Home,
    Review: ReviewScreen
  }
);


ClassifyStack.navigationOptions = ({ navigation }) => {

  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  const username = navigation.state.params.username;
  //hide tabBar
  if(routeName == "Section"){
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: "Home",
    
    tabBarIcon: ({ focused }) => (
      <Icon name="Close" size={30} color={
        focused ? activeColor : inactiveColor} 
        />
    )
  };
};


const TabNavigator = createBottomTabNavigator({
  ClassifyStack,
  HomeStack,
});

TabNavigator.navigationOptions = ({ navigation}) =>{
  //const username = this.props.navigation.state.params.username;
  //username: navigation.state.params.username;
  //const username = navigation.getParam(username);
 };




export default TabNavigator;


