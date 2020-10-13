import React,{Component} from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeScene from './HomeScene';
import SignUpView from './SignUpView';





export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'HomePage'};
  }
  render(){
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'HomePage'}
          title="HomePage"
          renderIcon={() => <Image style={bottom.icon} source={require('./image/test.jpeg')} />}
          renderSelectedIcon={() => <Image style={bottom.icon} source={require('./image/logo.jpeg')} />}
          onPress={() => this.setState({ selectedTab: 'HomePage' })}>
          <HomeScene/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'Search'}
          title="Search"
          renderIcon={() => <Image style={bottom.icon} source={require('./image/test.jpeg')} />}
          renderSelectedIcon={() => <Image style={bottom.icon} source={require('./image/logo.jpeg')} />}
          onPress={() => this.setState({ selectedTab: 'Search' })}>
          <HomeScene/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'Mine'}
          title="Mine"
          renderIcon={() => <Image style={bottom.icon} source={require('./image/test.jpeg')} />}
          renderSelectedIcon={() => <Image style={bottom.icon} source={require('./image/logo.jpeg')} />}
          onPress={() => this.setState({ selectedTab: 'Mine' })}>
          <SignUpView/>
        </TabNavigator.Item>
    </TabNavigator>
    );
  }
 
}
const bottom = StyleSheet.create({
  icon:{
    height:20,
    width:20
  }
});

