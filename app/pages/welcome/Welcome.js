
import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, Text, Platform } from 'react-native';
import fetch from 'sx-fetch/src';
import Swiper from 'react-native-swiper';
import { px, isMinScreen } from '../../utils/ScreenUtil';
import Storage from '../../utils/Storage';
import * as theme from '../../config/theme.conf';

/**
 * 欢迎页面
 */
class Welcome extends Component<{}> {

    static navigationOptions = navigation => ({
        title: '欢迎页',
        header: null,
    })

    state = {
        disabled: false,
        touchable: true
    }

    data = [
        {
            "image": require('../../assets/images/welcome/welcome_1.png'),
            "tip": "更安全",
            "tipContent": "告诉你什么是安全，不要不要的",
        },
        {
            "image": require('../../assets/images/welcome/welcome_2.png'),
            "tip": "更便捷",
            "tipContent": "告诉你什么是便捷，不要不要的",
        },
        {
            "image": require('../../assets/images/welcome/welcome_3.png'),
            "tip": "更优惠",
            "tipContent": "告诉你什么是优惠，不要不要的",
        },
    ]


    login = () => {
        if (!this.state.touchable) return;

        this.setState({
            disabled: true,
            touchable: false
        }, () => {
            Storage.load({
                key: 'fingerChecked'
            }).then(res => {
                // if (res.fingerStatus) {
                //     this.props.navigation.navigate("FingerprintLogin");
                // } else {
                //     this.props.navigation.navigate("LoginPage");
                // }
            }).then(err => {
                // this.props.navigation.navigate("LoginPage");
            });
            this.setState({
                disabled: false,
            });
            this.resetTouchable();
        });
    }

    resetTouchable = () => {
        setTimeout(() => {
            this.setState({ touchable: true });
        }, 1500);
    }

    render() {
        const { disabled } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    width: px(750),
                    height: px(isMinScreen() ? 950 : 1110),
                }}>
                    <Swiper
                        showsButtons={false}
                        dotStyle={{
                            width: px(37),
                            height: px(7),
                            backgroundColor: '#ede7e7',
                            marginBottom: px(-60),

                        }}
                        activeDotStyle={{
                            width: px(37),
                            height: px(7),
                            backgroundColor: '#ff5d58',
                            marginBottom: px(-60),
                        }}>
                        {
                            this.data.map((item, index) => (
                                <View style={styles.bannerViewStyle} key={index}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={item.image}
                                        resizeMode='stretch' />

                                </View>
                            ))
                        }
                    </Swiper>
                </View>
                <View style={styles.buttonBox}>
                    <Button
                        type="warning"
                        disabled={disabled}
                        style={styles.register}
                        title="注册" />
                    <Button
                        disabled={disabled}
                        onClick={this.login}
                        style={styles.login}
                        title="登录" />
                </View>
            </View>
        );
    }
}

/**
 * 创建组件样式
 */
const styles = StyleSheet.create({
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: px(40),
        paddingRight: px(40),
        position: 'absolute',
        bottom: Platform.OS === 'android' ? px(40) : px(80),
    },
    register: {
        width: px(320),
        height: px(80),
        borderRadius: px(60),
    },
    login: {
        width: px(320),
        height: px(80),
        marginLeft: px(30),
        borderRadius: px(60),
        borderColor: 'red',
    },
    bannerViewStyle: {
        alignSelf: 'center',
        height: px(1092),
    },
    tipTitleStyle: {
        marginTop: px(20),
        fontSize: px(60),
        textAlign: 'center',
        color: '#f95f57',
    },
    tipContentStyle: {
        fontSize: px(30),
        textAlign: 'center',
        marginTop: px(20),
        color: '#e3bfbf',
    },
    imageStyle: {
        width: px(750),
        height: px(isMinScreen() ? 1100 : 1334),
        alignSelf: 'center',
    },
});

/**
 * 导出自定义组件
 */
export default Welcome;
