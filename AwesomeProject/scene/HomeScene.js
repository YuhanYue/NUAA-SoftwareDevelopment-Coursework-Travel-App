/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Cardview from 'react-native-cardview-wayne';

export default class HomeScene extends Component {
    render() {
        return (
				<Cardview cardElevation={60}//官网都给CardView吗
                          maxCardElevation={2}
                          radius={20}
                          backgroundColor={'#99CCFF'}>
                    <View style={{padding:60}}>
                        <View>
                            <Text>CardView for iOS and Android</Text>
                        </View>
                        <View>
                            <Text>This is test</Text>
                        </View>
                    </View>
          </Cardview>

          
                
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});