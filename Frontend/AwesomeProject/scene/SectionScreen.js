import React from 'react';
import styled from 'styled-components';
import {Button, TouchableOpacity, StatusBar, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList, ScrollView, ListView} from 'react-native-gesture-handler';

class SectionScreen extends React.Component {
  static navigationOptions = {
    heeder: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
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
  fetchData() {
    var url =
      'http://172.20.10.10:8888/route';
    fetch(url)
      .then((res) => res.json()) //转化为json
      .then((json) => {
        this.setState({data: json}); //将json数据传递出去，setState会重新调用render()
        console.log(this.state.data);
      })
      .catch((e) => {
        alert(e);
      });
  }

  componentDidMount() {
    this.fetchData();
    //console.log(this.state.data);
  }

  render() {
    //recieve data
    const {navigation} = this.props;
    const section = navigation.getParam('section');
    return (
      <Container>
        <StatusBar hidden />
        <Cover>
           <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle source={section.subtitle} />
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
          <CloseView>
            <Icon
              name="close"
              size={36}
              color="#4775f2"
              style={{marginTop: -2}}
            />
          </CloseView>
        </TouchableOpacity>
        <ScrollView>
          <Content>
            <View>
              <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                  <View>
                    <Text>{item.routeIntro}</Text> 
                  </View>
                )}
              />
            </View>
          </Content>
        </ScrollView>
        <Text>This is a test!!!!</Text>
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
