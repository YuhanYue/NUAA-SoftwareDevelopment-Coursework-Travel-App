//分类的数据，

import React from 'react';
import {ScrollView, TouchableOpacity, Animated, Easing, View} from 'react-native';
import Card from '../components/Card';

import styled from 'styled-components';
import {NotificationIcon} from '../components/Icons';
//import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { FlatList } from 'react-native-gesture-handler';

function mapStateToProps(state)  {
  return {action: state.action};
 
}


function mapDispatchToProps(dispatch){
  return {
    openMenu: () => dispatch ({
      type:"OPEN_MENU"
    })
  };
}

class ClassifyScreen extends React.Component {

  static navigationOptions = {
    title: "Home"
  }
  state = {
    scale: new Animated.Value(1),
  };

 
  componentDidUpdate(){
    this.toggleMenu(),
    this.fetchData()
  }

  toggleMenu = () =>{
    if(this.props.action == "openMenu"){
      Animated.spring(this.state.scale,{
        toValue: 0.9
      }).start();
    }
  }



  render() {
    return (
      <AnimatedContainer>
        <Menu />
        <ScrollView style={{height: '100%'}}>
          {/*user*/}
          <TitleBar>
            <TouchableOpacity onPress = {this.props.openMenu}>
              <Avatar source={require('./image/logo.jpeg')} />
            </TouchableOpacity>
            <Title>Welcome back,</Title>
            <Name>Yuhan</Name>
            <NotificationIcon
              style={{position: 'absolute', right: 20, top: 5}}
            />
          </TitleBar>
          {/*Start your journey from... */}
          
          <Subtitle style ={{paddingTop: 10}}>Starting your journey from...</Subtitle>
          
          <ScrollView
            style={{
              flexDirection: 'row',
              padding: 20,
              paddingLeft: 12,
              paddingTop: 20,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
        
            {logos.map((logo, index) => (
              <TouchableOpacity 
              onPress = { () => {this.props.navigation.push("Home")}}>
              <Logo
                key={index}
                image={logo.image}
                text={logo.text}
                //using a separate place
              />
              </TouchableOpacity>
            ))}
          {/*Eplore more... */}
          </ScrollView>
          
          <Subtitle>Continue Exploring...</Subtitle>
          <ScrollView
            horizontal={true}
            style={{paddingBottom: 30}}
            showsHorizontalScrollIndicator={false}>

            {cards.map((card, index) => (
              <TouchableOpacity key={index} onPress = {() => {
                this.props.navigation.push("Section", {
                  section: card
                  //passing data
                })
              }}>
              <Card 
                title={card.title}
                image={card.image}
                caption={card.caption}
                subtitle={card.subtitle}
              />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ScrollView>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassifyScreen);

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Chengdu',
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Nanjing',
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Shenzhen',
  },
]; //array

const cards = [
  {
    title: 'React Native',
    image: require('../image/test.jpeg'),
    subtitle: 'text',
    caption: '1 to 12',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'React Native',
    image: require('../image/test.jpeg'),
    subtitle: 'react-Native',
    caption: '1 to 12',
    logo: require('../assets/logo-react.png'),
  },
];
