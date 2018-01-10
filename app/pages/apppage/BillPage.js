/**
 * 主页的账单页面
 * 
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'ios,\n',
    android: 'android\n'
});

/**
 * 创建组件
 */
class Template extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>BillPage</Text>
            </View>
        );
    }
}

/**
 * 创建组件样式
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

/**
 * 导出自定义组件
 */
export default Template;
