import React from 'react';
import styled from 'styled-components';
import {
  Button,
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Alert,
  AsyncStorage
} from 'react-native';
import Axios from "axios";

import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList, ScrollView, ListView, TextInput} from 'react-native-gesture-handler';
//ßimport reviewInput from ('../components/reviewInput')


const activeColor = "#F6BF1C";
const inactiveColor = "#E6E8EB";
var routeName = '';  
var routeLength= '';
var routeContent = '';


class SectionScreen extends React.Component {
  routeID = '';
  //routeName = '';

  

  static navigationOptions = {
    heeder: null,
  };


  async componentDidMount() {
    this.fetchData();
    
    try {//get username who logged in 
       const username = await AsyncStorage.getItem('username');
       this.setState({username: username})//取用户名
       } catch (error) {
       
        console.log(error); 
       }
    }

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      username: '',
      isFavorite: false,
    };
  }
  //setState会重新调用render()

  /*
  state = {
    data:[],
    resultJson:null
  };*/
  /*
  fetchData=  async()=>{
    const response = await fetch('http://127.20.10.10:4545/Volumes/OVERAINY/Github/Travel-App/Frontend/AwesomeProject');
    const card = await response.json();
    this.setState({data:card});
  }*/


  
  fetchData() {//route里存图片？
    var url = 'http://192.168.1.100:3000/route';
    fetch(url)
      .then((res) => res.json()) //转化为json
      .then((json) => {
        this.setState({data: json}); //将json数据传递出去，setState会重新调用render()
        
        //console.log(routeID);
        routeName = json[routeID -1].routeName;
        routeContent = json[routeID -1].routeContent;
        routeLength = json[routeID - 1].routeLength;
        //console.log(routeName)
      
      })
      .catch((e) => {
        alert(e);
      });
  }


  Order = () =>{
    var url = 'http://192.168.1.100:3000/order';//ip地址在变化，要注意
    Axios.post(url ,{
      username: this.state.username, 
      routeID: routeID,
      routeName: routeName,
      //routeID: this.routeID,
    }).then((response) => {
      //console.log(response);
      //ToastAndroid.show('预定成功！',ToastAndroid.SHORT);
      //console.log(username);
    });
  }

  addFavorite = () => {
    if (this.state.isFavorite){//已经添加喜欢
      this.setState({ isFavorite: false});
      //取消收藏
      var url = 'http://192.168.1.100:3000/cancelFavorite';
      Axios.post(url ,{
      username: this.state.username, 
      routeID: routeID,
      //routeID: this.routeID,
    }).then((response) => {
      //console.log(response);
      //ToastAndroid.show('预定成功！',ToastAndroid.SHORT);
      //ßconsole.log(username);
    });
    } else{//没添加到喜欢,则添加喜欢
      this.setState({ isFavorite: true});
      var url = 'http://192.168.1.100:3000/favorite';
    Axios.post(url ,{
      username: this.state.username, 
      routeID: routeID,
      //routeID: this.routeID,
    }).then((response) => {
      //console.log(response);
      //ToastAndroid.show('预定成功！',ToastAndroid.SHORT);
      //ßconsole.log(username);
    });

    }
    
  }
  render() {
    //recieve data
    this.fetchData();
    const {navigation} = this.props;
    const section = navigation.getParam('section');
    //const routeInfo = navigation.getParam('routeInfo');
    routeID = navigation.getParam('routeID');
    //console.log(routeName)
    //this.setState({routeID: routeID});

    //this.username = navigation.getParam('username');
    //this.setState({username: username});
    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={require('./image/test.jpeg')} />
          <Wrapper>
            {/*<Logo source={section.logo} />*/}
            <Subtitle source={routeName} />
          </Wrapper>
           
        <Title>{routeName}</Title>
          <Caption>旅行天数：{routeLength}</Caption>
        </Cover>
        <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}
        } onPress = {this.addFavorite}>
          <CloseView>
            <Icon
              name="star"
              size={36}
              color={inactiveColor}
              
              //style={{marginTop: -2}}
            />
          </CloseView>
        </TouchableOpacity>
        <ScrollView>
          <Content>
      <Text>{routeContent}</Text>
           {/* <View>
              <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                  <View>
                    <Text>{item.routeIntro}</Text>
                  </View>
                )}
              />
                </View>*/}
          </Content>
        </ScrollView>
        <View style={styles.canNot}>
          <TouchableOpacity style={styles.btnStyle}
          onPress = {this.Order}>
            <Text>立即预定</Text>
          </TouchableOpacity> 
         
         
         
          <TouchableOpacity style={styles.btnStyle}
            onPress = { () => { this.props.navigation.push("Review",{
              routeID:routeID
            })}}>
            <Text>查看评论</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStyle}
            onPress = { () => this.props.navigation.push("addReview",{
              routeID: routeID
            })}>
            <Text>添加评论</Text>
          </TouchableOpacity>
        </View>
        
      </Container>
    );
  }
}

/*
<View>
          <FlatList data ={this.state.data} renderItem={({item}) =>
          <View>
            <Text>{item.username}</Text>
            </View>
        } />
        </View>*/

export default SectionScreen;

const Content = styled.View`
  height: 100%;
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
`;

const Logo = styled.Image`
  width: 24px;
  height: 40px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;



const styles = StyleSheet.create({
  btnStyle_order: {
    //bottom
    height: 40,
    width: 210,
    //borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'blue',
    //沿主轴方向居中
    justifyContent: 'center',
  },
  btnStyle_review: {
    //bottom
    height: 40,
    width: 210,
    //borderRadius: 5,
    marginTop: 20,
    backgroundColor: (230,230,250),
    //沿主轴方向居中
    justifyContent:'center',
  },
  canNot: {
    width: 400,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    //设置主轴为两端对齐
    justifyContent: 'space-between',
  },
});
