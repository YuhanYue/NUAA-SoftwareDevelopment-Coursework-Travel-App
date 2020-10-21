
//HomePage
import React from 'react'
import {
  PanResponder,
  Animated,
} from 'react-native'
//import { ScreenStackHeaderCenterView } from 'react-native-screens';
import styled from 'styled-components'
import TravelRoute from '../components/TavelRoute';
import {connect} from "react-redux"

function mapStateToProps(state) {
  return {
    action: state.action
  };
}



function getNextIndex(index) {
  var nextIndex = index + 1;
  if (nextIndex > travelroute.length - 1) {
    return 0;
  }
  return nextIndex;
}

class Home extends React.Component{
  static navigationOptions = {
    header: null
};
state = {
  pan: new Animated.ValueXY(),
  scale: new Animated.Value(0.9),
  translateY: new Animated.Value(44),
  thirdScale: new Animated.Value(0.8),
  thirdTranslateY: new Animated.Value(-50),
  index: 0,
  opacity: new Animated.Value(-1)
};

componentWillMount() {
    this._panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (event, gestureState) => {
          if(gestureState.dx === 0 && gestureState.dy ===0 ){// forbidden pan 
            return false;
          }else{
            //return true;//enabling pan gesture, but donnot want it in full screen -> recieve the props
            if (this.props.action == "openCard"){
              return false;
            } else {
              return true;
            }
          }
        },

        onPanResponderGrant: () => {//takes 1st card position
          Animated.spring(this.state.scale, { toValue: 1 }).start();
          Animated.spring(this.state.translateY, { toValue: 0 }).start();

          Animated.spring(this.state.thirdScale, { toValue: 0.9 }).start();
          Animated.spring(this.state.thirdTranslateY, { toValue: 44 }).start();

          Animated.timing(this.state.opacity, { toValue: 1 }).start();
        },
        
        onPanResponderMove: Animated.event([
            null,
            { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),

 
        onPanResponderRelease: () => {
          const PositionY = this.state.pan.y.__getValue()
          Animated.timing(this.state.opacity, {toValue: -1}).start();
          //console.log(PositionY);
          if(PositionY > 200){//dropping 
            Animated.timing(this.state.pan, {toValue: { x: 0, y: 1000}
            }).start(()=> {
              this.state.pan.setValue({ x: 0, y: 0 });
              this.state.scale.setValue(0.9);
              this.state.translateY.setValue(44);
              this.state.thirdScale.setValue(0.8);
              this.state.thirdTranslateY.setValue(-50);
              this.setState({ index: getNextIndex(this.state.index) });

            });
          } else{
              Animated.spring(this.state.pan, {toValue: { x: 0, y: 0 }}).start();
              Animated.spring(this.state.scale, {toValue: 0.9}).start();
              Animated.spring(this.state.translateY, {toValue: 44}).start();

              Animated.spring(this.state.thirdScale, { toValue: 0.8 }).start();
              Animated.spring(this.state.thirdTranslateY, { toValue: -50 }).start();
          }
          
        }
        
    });
}


render() {
    return (
        <Container>
          <AnimatedMask style={{ opacity: this.state.opacity }} />
            <Animated.View
                style={{
                    transform: [
                        { translateX: this.state.pan.x },
                        { translateY: this.state.pan.y }
                    ]
                }}
                {...this._panResponder.panHandlers}
            >
              <TravelRoute 
              title={travelroute[this.state.index].title} 
              image = {travelroute[this.state.index].image}
              timeline = {travelroute[this.state.index].timeline}
              text = {travelroute[this.state.index].text}
              canOpen = {true}//Only allow to open 1st card
              />
            </Animated.View>
            <Animated.View style = {{
              position: "absolute",
              top: this.state.index,
              left: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              justifyContent:"center",
              alignItems:"center",
              transform: [
                {scale: this.state.scale},
                {translateY: this.state.translateY}
              ]
            }}>
              <TravelRoute 
              title={travelroute[getNextIndex(this.state.index)].title} 
              image = {travelroute[getNextIndex(this.state.index)].image}
              timeline = {travelroute[getNextIndex(this.state.index)].timeline}
              text = {travelroute[getNextIndex(this.state.index)].text}
              />
            </Animated.View>
            
            {/* 3rd card*/}
             <Animated.View style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -3,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            transform: [
              { scale: this.state.thirdScale },
              { translateY: this.state.thirdTranslateY }
            ]
          }}
        >
              <TravelRoute 
              title={travelroute[getNextIndex(this.state.index + 1)].title} 
              image = {travelroute[getNextIndex(this.state.index + 1)].image}
              timeline = {travelroute[getNextIndex(this.state.index + 1)].timeline}
              text = {travelroute[getNextIndex(this.state.index + 1)].text}
              />
            </Animated.View>
        </Container>
    );
}
}
export default connect(mapStateToProps)(Home);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Mask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.25);
  z-index: -3;
`;

const AnimatedMask = Animated.createAnimatedComponent(Mask)


const Text = styled.Text``;

const travelroute = [
  {
    title: "Test 1",
    image: require("../image/test.jpeg"),
    timeline: "August 1",
    text:
      "Zjd is piggy in China. Thanksmy app Price Tag, a top news app in China."
  },
  {
    title: "Test 2",
    image: require("../image/logo.jpeg"),
    timeline: "Chad Goodman",
    text:
      "Design+Code was the first ruilding asa daskdqw diqhwdqjwhkqasaskdakajhkajshdkajshdkajhsdkajhsdkajhsdkajhsdkjahsdkajhsdkjahdkajjwhkqjhskqjhwskqjwhkqjwhksjqhwskqjha production ready app from scratch. "
  },
  {
    title: "Nikhiljay",
    image: require("../image/logo.jpeg"),
    timeline: "Nikhil D'Souza",
    text:
      "Rew=al website in @reactjs and I'm very excited with it."
  }
];



