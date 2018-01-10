/**
 * 主页底部的tabbar
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import * as theme from '../../config/theme.conf';

import MainPage from './MainPage';
import BillPage from './BillPage';
import AccountPage from './AccountPage';

import { px } from '../../utils/ScreenUtil';

/**
 * 创建组件
 */
const MainTab = TabNavigator({
    MainPage: { screen: MainPage },
    BillPage: { screen: BillPage },
    AccountPage: { screen: AccountPage },
}, {
        initialRouteName: 'MainPage',
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        navigationOptions: {
            gesturesEnabled: false,
            headerBackTitle: null,
        },
        tabBarOptions: {
            showIcon: true,
            activeTintColor: theme.TAB_TINT_COLOR_ACTIVE,
            inactiveTintColor: theme.TAB_TINT_COLOR,
            indicatorStyle: { height: 0 },
            style: {
                backgroundColor: '#ffffff',
                height: 49,
                paddingBottom: 3,
                justifyContent: 'center',
                overflow: 'visible',
            },
            labelStyle: {
                fontSize: 11,
                lineHeight: 11,
                marginTop: Platform.OS === 'ios' && DeviceInfo.getSystemVersion().split('.')[0] > 9 ? 14 : 0,
            },
            iconStyle: {
                width: px(750),
                height: px(50),
                overflow: 'visible',
            }
        }
    });

/**
 * 导出自定义组件
 */
export default MainTab;
