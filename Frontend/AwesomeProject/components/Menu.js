//我的订单，评论，修改个人信息

import React, {Component} from 'react';
import styled from 'styled-components';
import {Animated, TouchableOpacity, Dimensions, StatusBar, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuItem from '../components/MenuItem';
import {connect} from 'react-redux';

//props cannot change, state can change

const screeHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function mapStateToProps(state) {
  return {action: state.action}; //connect redux to props
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: 'CLOSE_MENU'
      }),
  };
}


class Menu extends React.Component {

  state = {
    username : ''
  };

  async componentDidMount() {
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

  render() {
    return (
      <Container>
        <StatusBar hide/>
        <Cover>
          <Image source={require('../assets/background2.jpg')} />
          <Title>{this.state.username}  </Title>
          <Subtitle> Hi </Subtitle>
        </Cover>
        
        <Content>
          
            <TouchableOpacity
             onPress = { () => {this.props.navigation.push("myOrder")}}>
              <MenuItem
              title={'My Orders'}
              text={'view and manage all of your previous orders'}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress = { () => {this.props.navigation.push("myReview")}}>
              <MenuItem
              title={'My Reviews'}
              text={'view and manage all of your comments'}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress = { () => {this.props.navigation.push("myFavorite")}} >
              <MenuItem
              title={'My Favorites'}
              text={'view routes you have collected'}
            />
            </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
//const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screeHeight};
  background-color: #f0f3f5;
  padding: 50px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const items = [
  {
    icon: 'settings',
    title: 'Account',
    text: 'settings',
  },
  {
    icon: 'ios-card',
    title: 'Biling',
    text: 'payments',
  },
  {
    icon: 'settings',
    title: 'Reviews',
    text: 'your reviews',
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon',
  },
];
