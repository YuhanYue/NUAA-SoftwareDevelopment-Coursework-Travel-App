//分类的数据，
//登陆后的username怎么传进来？
import React from 'react';
import {ScrollView, TouchableOpacity, Animated, Easing, View, AsyncStorage} from 'react-native';
import Card from '../components/Card';

import styled from 'styled-components';
import {NotificationIcon} from '../components/Icons';
//import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { FlatList } from 'react-native-gesture-handler';
//import information from  '../Global';

function mapStateToProps(state)  {
  return {action: state.action};
 
}


function mapDispatchToProps(dispatch) {
  return {
    updateUsername:(uername) =>
      dispatch({
        type:"UPDATE_USERNAME",
        username
      })
  }
}

class ClassifyScreen extends React.Component {

  async componentDidMount() {
    this.fetchData();
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
/*
  componentDidMount = () => {
    this.fetchData();
    const newUsername = AsyncStorage.getItem('username');
    //const users = AsyncStorage.getItem("username")
    console.log('classify screen')
    console.log(newUsername);
  }*/
 

  constructor(props) {
    super(props);
    //this.username = navigation.getParam('username');
  }

  
  
/*
  static navigationOptions = {
    title: "Home"
  }*/
  state = {
    scale: new Animated.Value(1),
    routeData:null,
    username: [],
    routeName:'',
    routeIntro:'',
    
  };

  fetchData(){
    var url = 'http://192.168.1.100:3000/route';
    fetch(url)
        .then((res)=> res.json())//转化为json
        .then((json)=>{
            this.setState({routeData:json});//将json数据传递出去，setState会重新调用render()
            
            //console.log(this.state.routeName);
            //console.log(this.state.routeData[0]);
        })
        .catch((e)=>{
            alert(e);
        });
  }


  /*
  componentDidUpdate(){
    this.toggleMenu()
  }

  toggleMenu = () =>{
    if(this.props.action == "openMenu"){
      Animated.spring(this.state.scale,{
        toValue: 0.9
      }).start();
    }
  }
*/


  render() {
    //const {navigation} = this.props;

    return ( 
      <AnimatedContainer>
        <ScrollView style={{height: '100%'}}>
          {/*user*/}
          <TitleBar>
            
              <Avatar source={require('./image/logo.jpeg')} />
        

            <Title>Welcome back,</Title>
            <Name>{this.state.username}</Name>
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
               <FlatList data ={this.state.routeData} keyExtractor={(item, index) => index.toString()} renderItem={({item}) =>
                  <TouchableOpacity  onPress = {() => {
                    this.props.navigation.push("Section", {
                      routeID: item.routeID,
                      section: cards,
                      //passing data
                    })
                  }}>
                    <Card 
                title={item.routeName}
                image={require('./image/test.jpeg')}
                caption={item.routeLength}
                subtitle={item.routeContent}
              />
                  </TouchableOpacity>
             
            }
              />
{/*
            {cards.map((card, index) => (
              <TouchableOpacity key={index} onPress = {() => {
                this.props.navigation.push("Section", {
                  section: card,
                  username: this.state.username
                  //passing data
                })
              }}>
              <FlatList data ={this.state.routeData} keyExtractor={(item, index) => index.toString()} renderItem={({item}) =>
                   <Card 
                title={item.routeName}
                image={card.image}
                caption={card.caption}
                subtitle={card.subtitle}
              />
                }/>
             
            </TouchableOpacity>
            ))}
              */}
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
];
