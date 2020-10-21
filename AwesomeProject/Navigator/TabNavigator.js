
import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../scene/Home';
//import MineScene from '../scene/MineScene'
import ClassfiyScreen from '../scene/ClassifyScreen'
import SectionScreen from '../scene/SectionScreen'
import LoginView from "../scene/LoginView";



const activeColor = "#4775f2";
const inactiveColor = "#b8bece";


const HomeStack = createStackNavigator(
  {
    Home: Home,
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
    Origin: Home
  }
);


ClassifyStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

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

export default TabNavigator;


