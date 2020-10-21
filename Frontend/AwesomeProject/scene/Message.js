import React from "react";
import {
    StyleSheet,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import HomeScene from './HomeScene'
import LoginView from "./SignUpView";


class Message extends React.Component {
    login = () => {
        this.props.navigator.replace({
          scene: LoginView,
        })
  
    };
  
    render() {
        return (
            <Container>
                <Cover>
              { /* <TouchableOpacity style={styles.btnStyle}
                             onPress={this.login}>
          <Text 
              style={styles.loginText}>login</Text>
        </TouchableOpacity>*/}
                    <Image source={this.props.image}/>
                    
                    <Title>{this.props.title}</Title>
                    
                    <Author>by {this.props.author}</Author>
                    
                </Cover>
                <Text>{this.props.text}</Text>
            </Container>
        );
    }
}

export default Message;

const Container = styled.View`
    width: 315px;
    height: 460px;
    border-radius: 14px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
    height: 290px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;
const Image = styled.Image`
    width: 100%;
    height: 290px;
    //onPress={this.login}

`;
const Title = styled.Text`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    width: 300px;
`;
const Author = styled.Text`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
`;
const Text = styled.Text`
    font-size: 17px;
    margin: 20px;
    line-height: 24px;
    color: #3c4560;
`;


const styles = StyleSheet.create({

  btnStyle: {//bottom
    height: 40,
    width:  200 - 32,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#4398ff',
    //沿主轴方向居中
    justifyContent: 'center',
  },

  });
  