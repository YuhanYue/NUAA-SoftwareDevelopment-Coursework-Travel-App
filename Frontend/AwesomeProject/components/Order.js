import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native'
import styled from 'styled-components';

import CardView from 'react-native-cardview-wayne';



const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const tabBarHeight = 40;

export default class Order extends Component {

    state = {
        cardWidth: new Animated.Value(300),
        cardHeight: new Animated.Value(100),
        titleTop: new Animated.Value(20),
        opacity: new Animated.Value(0),
    };

    //Full screen on clikcking
    openCard = () =>{
        if(!this.props.canOpen) return;
    
        Animated.spring(this.state.cardWidth, {toValue: screenWidth}).start();
        Animated.spring(this.state.cardHeight, {toValue: screenHeight}).start();
        Animated.spring(this.state.titleTop, {toValue: 40}).start();
        Animated.timing(this.state.opacity, {toValue: 1}).start();
    
        //StatusBar.setHidden(true);
    }
    
    //Change it back
    closeCard = () =>{
        Animated.spring(this.state.cardWidth, {toValue: 300}).start();
        Animated.spring(this.state.cardHeight, {toValue:100}).start();
        Animated.spring(this.state.titleTop, {toValue: 20}).start();
        Animated.timing(this.state.opacity, {toValue: 0}).start();
    
        //StatusBar.setHidden(false);
    
    }
    
    render() {
        return (
            <TouchableWithoutFeedback onPress = {this.openCard}>
            <AnimatedContainer style = {{width: 300, height: 100}}>
                <Cover>
                    <Title>Test</Title>
                    <Text>zzh and liujian is pig</Text>
                </Cover>
            </AnimatedContainer>
            </TouchableWithoutFeedback>
              
        );
    }
};


const Container = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
  height: 100px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;



const Title = styled.Text`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    width: 300px;
`

const Text = styled.Text`
    font-size: 17px;
    margin: 20px;
    line-height: 24px;
    color: #3c4560;
`
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
    width:  100,
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
      width: 250,
      marginTop: 0,
      marginBottom: 10,
      marginLeft: 10,
      marginRight:  10,
      flexDirection: 'row',
      alignItems: 'center',
      //设置主轴为两端对齐
      justifyContent: 'space-between',
  },
  });
  
  