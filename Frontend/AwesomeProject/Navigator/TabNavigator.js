
import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../scene/Home';
//import MineScene from '../scene/MineScene'
import ClassfiyScreen from '../scene/ClassifyScreen'
import SectionScreen from '../scene/SectionScreen'
import ReviewScreen from "../scene/ReviewScreen";
import { renderToStringWithData } from "react-apollo";
import SearchBar from "../scene/SearchBar"
import addReviewPage from "../scene/addReviewPage";

import MyOrderPage from "../scene/MyOrderPage";
import Menu from '../components/Menu'

import MyReviewPage from "../scene/MyReviewPage";
import MyFavoritePage from  '../scene/MyFavoritePage'





const activeColor = "#4775f2";
const inactiveColor = "#b8bece";



const SearchStack = createStackNavigator(
  {
    Search:SearchBar,
    Section: SectionScreen,
    Review: ReviewScreen,
    addReview: addReviewPage
  }
);

SearchStack.navigationOptions = ({ navigation }) => {

  var tabBarVisible = true;//by default
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  
  return {
    
    tabBarVisible,
    tabBarLabel: "Search",

    tabBarIcon: ({ focused }) => (
      <Icon name="Close" size={30} color={
        focused ? activeColor : inactiveColor} 
        />
    )
  };
};

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
    addReview: addReviewPage,
    Review: ReviewScreen,
  }
);


ClassifyStack.navigationOptions = ({ navigation }) => {

  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  //const username = navigation.state.params.username;
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





const MenuStack = createStackNavigator(
  {
    Menu:Menu,
    myReview: MyReviewPage,
    myOrder: MyOrderPage,
    myFavorite: MyFavoritePage,
    
  }
);

MenuStack.navigationOptions = ({ navigation }) => {

  var tabBarVisible = true;//by default
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  
  return {
    
    tabBarVisible,
    tabBarLabel: "Mine",

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
  SearchStack,
  MenuStack,
  
});




export default TabNavigator;


