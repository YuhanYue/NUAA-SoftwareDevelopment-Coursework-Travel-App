/*import React,{Component} from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from '../scene/Home';
import SignUpView from '../scene/SignUpView';
import MineScene from '../scene/MineScene'
import OrderView from '../scene/OrderView'




export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'HomePage'};
  }
  render(){
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'HomePage'}
          title="HomePage"
          renderIcon={() => <Image style={bottom.icon} source={require('../image/test.jpeg')} />}
          renderSelectedIcon={() => <Image style={bottom.icon} source={require('../image/logo.jpeg')} />}
          onPress={() => this.setState({ selectedTab: 'HomePage' })}>
          <Home/>
        </TabNavigator.Item>


        <TabNavigator.Item
          selected={this.state.selectedTab === 'Mine'}
          title="Mine"
          renderIcon={() => <Image style={bottom.icon} source={require('../image/test.jpeg')} />}
          renderSelectedIcon={() => <Image style={bottom.icon} source={require('../image/logo.jpeg')} />}
          onPress={() => this.setState({ selectedTab: 'Mine' })}>
          <MineScene/>
        </TabNavigator.Item>
    </TabNavigator>
    );
  }
 
}
const bottom = StyleSheet.create({
  icon:{
    height:20,
    width:20
  }
});
*/
import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../scene/Home';
//import MineScene from '../scene/MineScene'
import ClassfiyScreen from '../scene/ClassifyScreen'
import SectionScreen from '../scene/SectionScreen'



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

const ProjectsStack = createStackNavigator({
  Projects: SectionScreen,
});




const TabNavigator = createBottomTabNavigator({
  ClassifyStack,
  HomeStack,
  ProjectsStack
  
});

export default TabNavigator;


