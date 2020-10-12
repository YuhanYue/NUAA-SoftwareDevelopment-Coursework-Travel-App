import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  View,  
} from 'react-native';  

import LoginView from './scene/LoginView'

export default class loginscence extends Component {  
  render() {  
    return (  
      <View style = { styles.container }>  
       {/*通过import引入了Button控件后，就可以像下面这样直接使用这个控件，或者你写成自闭和也行<Button/>*/}  
        <LoginView> 
        </LoginView>  
      </View>  
    );  
  }  
}  