import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'

import CardView from 'react-native-cardview-wayne';

// TODO: What to do with the module?
export default class OrderView extends Component {
    render() {
        return (
            
            <View>
                <ScrollView contentContainerStyle={styles.contentContainer}></ScrollView>
				<CardView
                style={{marginHorizontal: 12}}
                cardElevation={4}
                maxCardElevation={4}
                radius={10}
                backgroundColor={'#ffffff'}>
                <View style={{padding:10, margin: 12}}>
                    <View>
                        <Text>ReactNative CardView for iOS and Android</Text>
                    </View>
                    <View>
                        <Text>This is test</Text>
                    </View>
                </View>
                <View style = {styles.canNot}>
                <TouchableOpacity style={styles.btnStyle}
                    onPress= {this.OrderView} >
                <Text 
                    style={styles.loginText}>打开订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}
                    onPress= {this.OrderView} >
                <Text 
                    style={styles.loginText}>删除订单</Text>
                </TouchableOpacity>
                </View>
            </CardView>
            
            <CardView
                style={{marginHorizontal: 12}}
                cardElevation={4}
                maxCardElevation={4}
                radius={10}
                backgroundColor={'#ffffff'}>
                <View style={{padding:10, margin: 12}}>
                    <View>
                        <Text>ReactNative CardView for iOS and Android</Text>
                    </View>
                    <View>
                        <Text>This is test</Text>
                    </View>
                </View>
                <View style = {styles.canNot}>
                <TouchableOpacity style={styles.btnStyle}
                    onPress= {this.OrderView} >
                <Text 
                    style={styles.loginText}>打开订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}
                    onPress= {this.OrderView} >
                <Text 
                    style={styles.loginText}>删除订单</Text>
                </TouchableOpacity>
                </View>
            </CardView>
            <CardView
                style={{marginHorizontal: 12}}
                cardElevation={4}
                maxCardElevation={4}
                radius={10}
                backgroundColor={'#ffffff'}>
                <View style={{padding:10, margin: 12}}>
                    <View>
                        <Text>ReactNative CardView for iOS and Android</Text>
                    </View>
                    <View>
                        <Text>This is test</Text>
                    </View>
                </View>
                <View style = {styles.canNot}>
                <TouchableOpacity style={styles.btnStyle}
                    onPress= {this.OrderView} >
                <Text 
                    style={styles.loginText}>打开订单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}
                    onPress= {this.OrderView} >
                <Text 
                    style={styles.loginText}>删除订单</Text>
                </TouchableOpacity>
                </View>
            </CardView>
            </View>
            
            
        );
    }
};

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
  
  