import React, { Component } from 'react'
import { TouchableNativeFeedback, Animated, Dimensions, StatusBar } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { createStore, combineReducers } from 'redux'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height + 50
class Card extends Component {
  static defaultProps = {
    image:require('./image/logo.jpeg'),
    title:'Awesome Styled Components',
    startNum:30,
    info:'Visual primitives for the component age Use the best bits of ES6 and CSS to style your apps without stress 💅'
  }
  state = {
    ViewWidth: new Animated.Value(300),
    ViewHeight: new Animated.Value(450),
    textTop: new Animated.Value(20),
    closeBtnOpacity: new Animated.Value(0),
  }
  render() {
    const { ViewHeight, ViewWidth, textTop,closeBtnOpacity } = this.state
    return (
      <TouchableNativeFeedback 
        onPress={this.openCard}>
        <AnimatedView style={{
          elevation: 5,
          width: ViewWidth,
          height: ViewHeight
          }}>
          <Image source={this.props.image} />
          <AnimatedText
            style={{
              marginTop: textTop
            }}
          >{this.props.title}</AnimatedText>
          <TouchableNativeFeedback onPress={this.closeCard}>
            <AnimatedCloseVtn style={{ opacity: closeBtnOpacity }}>
              <Icon name='times' size={30} />
            </AnimatedCloseVtn>
          </TouchableNativeFeedback>
          <Start>Star {this.props.startNum}K+</Start>
          <Info>{this.props.info}</Info>
          <LinearGradient
            colors={["rgba(255,255,255,0.2)","rgba(255,255,255,0.8)"]}
            style={{
              position: 'absolute',
              height: '30%',
              width: '100%',
              bottom: 0,
              borderRadius: 20
            }}
          />
        </AnimatedView>
      </TouchableNativeFeedback>
    )
  }
  openCard = () => {
    if(!this.props.canOpen) return
    this.AnimatedSpring(this.state.ViewWidth,screenWidth)
    this.AnimatedSpring(this.state.ViewHeight,screenHeight)
    this.AnimatedSpring(this.state.textTop,60)
    this.AnimatedSpring(this.state.closeBtnOpacity,1)
    StatusBar.setHidden(true)
    this.props.openCard()
  }
  closeCard = () => {
    this.AnimatedSpring(this.state.ViewWidth,300)
    this.AnimatedSpring(this.state.ViewHeight,450)
    this.AnimatedSpring(this.state.textTop,20)
    this.AnimatedSpring(this.state.closeBtnOpacity,0)
    StatusBar.setHidden(false)
    this.props.closeCard()
  }
  AnimatedSpring = (AnimatedName,toValue) => {
    Animated.spring(AnimatedName,{
      toValue,
      useNativeDriver: false
    }).start()
  }
}

const CloseBtn = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
  justify-content: center;
  align-items : center
`
const AnimatedCloseVtn = Animated.createAnimatedComponent(CloseBtn)
const Info = styled.Text`
  margin: 5px 10px;
  position: absolute;
  top: 300px;
  max-height: 25%;
  height: 450px
`
const Text = styled.Text`
  font-size: 25px;
  color: ${props => props.color || '#fff'};
  font-weight: bold;
  text-transform: capitalize;
  margin: 5px 10px;
  text-shadow: 0 0 5px #000
`
const AnimatedText = Animated.createAnimatedComponent(Text)
const Start = styled(Text)`
  position: absolute;
  top: 250px;
  text-transform: uppercase;
  text-shadow: 0 4px 10px #000
`

const Image = styled.Image`
  width: 100%;
  height: 290px;
  position: absolute
`

const View = styled.View`
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  margin: 0
`
const AnimatedView = Animated.createAnimatedComponent(View)

function mapStateToProps (state) {
  return {action: state.action}
}
function mapDispatchToProps (dispatch) {
  return {
    openCard: () => dispatch({
      type: 'OPEN_CARD'
    }),
    closeCard: () => dispatch({
      type: 'CLOSE_CARD'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)



function isLogin (state = false, action) {
  if (action.type === 'LOGIN') {
    return true
  } else if (action.type === 'LOGIN') {
    return false
  } else {
    return state
  }
}

function action (state = 'closeCard', action) {
  if (action.type === 'OPEN_CARD') {
    return 'openCard'
  } else if (action.type === 'CLOSE_CARD') {
    return 'closeCard'
  } else {
    return state
  }
}

const reducer = combineReducers({
  action,
  isLogin
})

const store = createStore(reducer)
export default store



