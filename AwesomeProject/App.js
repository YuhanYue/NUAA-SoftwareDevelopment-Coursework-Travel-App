import React, { useState } from "react";
import { Button, Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Username(props) {
  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState('');
  return (
    <View>
      <Text>
        Please enter your username!
      </Text>
      <TextInput
        Style = {{height: 40}}
        placeholder = "username"
        onChangeText={text => setText(text)}
        defaultValue = {text}
      />
    </View>
  );
}

function Passwd(props) {
  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState('');
  return (
    <View>
      <Text>
        Please enter your Password!
      </Text>
      <TextInput
        Style = {{height: 40}}
        placeholder = "password"
        onChangeText={text => setText(text)}
        defaultValue = {text}
      />
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Login" : "Thank you!"}
      />
    </View>
  );
}

export default function Cafe() {

  return (
    <View style={styles.container}>   
        <Image style={styles.circleImage} source={require('./image/logo.jpeg')}/>
        <TextInput
            style={styles.textInput}
            placeholder={'请输入用户名'}
          //输入框下划线
            underlineColorAndroid={'transparent'}/>
        <TextInput
            style={styles.textInput}
            placeholder={'请输入密码'}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}/>
        
        <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>
        {/*无法登录  新用户*/}
            <View style={styles.canNot}>
                <Text style={{color: '#4398ff'}}>无法登录</Text>
                <Text style={{color: '#4398ff'}}>新用户</Text>
            </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//相当于android布局的weight 充满容器
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
    height: 40,
    width: 200,
    marginBottom: 5,
    backgroundColor: 'white',
    textAlign: 'center',
},
btnStyle: {
  height: 40,
  width:  200 - 32,
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
    width: 200 - 32,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    //设置主轴为两端对齐
    justifyContent: 'space-between',
},
});
