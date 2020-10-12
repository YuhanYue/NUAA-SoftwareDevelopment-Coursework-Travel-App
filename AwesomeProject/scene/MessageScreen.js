import React from "react";
import styled from "styled-components";
import Message from "./Message";
import { PanResponder, Animated } from "react-native";
class MessageScreen extends React.Component {
    // 顶部Header的隐藏
    static navigationOptions = {
        header: null
    };
    state = {
        pan: new Animated.ValueXY()
    };

    componentWillMount() {
        // 设置手势的动作
        this._panResponder = PanResponder.create({
            // 将卡片同手势的移动而移动
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            // 当移动结束后动画自动回到原始位置
            onPanResponderRelease: () => {
                Animated.spring(this.state.pan, {
                    toValue: { x: 0, y: 0 }
                }).start();
            }
        });
    }
    render() {
        return (
            <Container>
                {/* Animated.View标签是使该View具备可以设置动画的能力 */}
                <Animated.View
                    style={{
                        transform: [
                            { translateX: this.state.pan.x },
                            { translateY: this.state.pan.y }
                        ]
                    }}
                    {...this._panResponder.panHandlers}
                >
                    <Message
                        title="Chengdu - Nanjing"
                        // 如下的jpg可以设置自己喜欢的图片
                        image={require("./image/IMG_3867.jpeg")}
                        author="123"
                        text="piggy zjd"
                    />
                </Animated.View>
            </Container>
        );
    }
}

export default MessageScreen;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f0f3f5;
`;
