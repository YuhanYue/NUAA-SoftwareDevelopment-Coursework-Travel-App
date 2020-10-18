import React from 'react';
import {ScrollView} from 'react-native';
import Card from '../components/Card';

import styled from 'styled-components';
import {NotificationIcon} from '../components/Icons';
//import { Ionicons } from '@expo/vector-icons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo';
export default class ClassifyScreen extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView style={{height: '100%'}}>
          <TitleBar>
            <Avatar source={require('./image/logo.jpeg')} />
            <Title>Welcome back,</Title>
            <Name>Yuhan</Name>
            <NotificationIcon
              style={{position: 'absolute', right: 20, top: 5}}
            />
          </TitleBar>
          <ScrollView
            style={{flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30}}
            horizontal={true}>
            <Logo
              image={require('../assets/logo-framerx.png')}
              text="framerx"
            />
            <Logo
              image={require('../assets/logo-framerx.png')}
              text="framerx"
            />
          </ScrollView>
          <Subtitle>Continue Exploring...</Subtitle>
          <ScrollView
            horizontal={true}
            style={{paddingBottom: 30}}
            showsHorizontalScrollIndicator={false}>
            <Card
              title="Nanjing to Shenzhen"
              image={require('./image/test.jpeg')}
              caption="ReactNative"
              subtitle="5 to 12 days"
            />
            <Card
              title="Nanjing to Shenzhen"
              image={require('./image/logo.jpeg')}
              caption="ReactNative"
              subtitle="5 to 12 days"
            />
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}

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
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

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
