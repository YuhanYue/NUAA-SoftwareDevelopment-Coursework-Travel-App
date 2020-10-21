import React from 'react';
import styled from 'styled-components';
import {Button, TouchableOpacity, StatusBar, Text} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

class SectionScreen extends React.Component {
  static navigationOptions = {
    heeder: null,
  };
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
          {/*<CloseView>
       <Icon name = "close" size={36} color='#4775f2' style = {{marginTop: -2}}/>
      </CloseView>*/}
        </TouchableOpacity>
        <ScrollView>
        <Content>
          <Text>This is aKoa 是一个新的 web 框架，由 Express 幕后的原班人马打造
          Koa 是一个新的 web 框架，由 Express 幕后的原班人马
          Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，KKoa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并
          Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并
          Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并oa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并 </Text>
        </Content>
        </ScrollView>
        <Text>This is a test</Text>
      </Container>
    );
  }
}

export default SectionScreen;

const Content = styled.View`
height: 100%;
`;

const htmlContent = 
` 
  <h2> This is a title </h2>
  <p> <strong>This is a <a href= "http://www.baidu.com">link</a></p>
`
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
  color: rgba(255,255,255,0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;