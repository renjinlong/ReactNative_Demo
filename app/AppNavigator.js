import React, { Component } from 'react';
import { BackHandler, Platform } from 'react-native';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import fetchInterceptors from './utils/fetchInterceptors';

import * as theme from './config/theme.conf';
import Tab from './pages/apppage/MainTab';
import MainPage from './pages/apppage/MainPage';
import BillPage from './pages/apppage/BillPage';
import AccountPage from './pages/apppage/AccountPage';
import Welcome from './pages/welcome/Welcome';
import LaunchScreen from './pages/LaunchScreen';

/**
 * 应用根路由
 */
export const RootNavigator = StackNavigator({
    Tab: { screen: Tab },
    MainPage: { screen: MainPage },
    BillPage: { screen: BillPage },
    AccountPage: { screen: AccountPage },
    Welcome: { screen: Welcome },
    LaunchScreen: { screen: LaunchScreen },
}, {
        initialRouteName: 'LaunchScreen',
        mode: 'card',
        headerMode: 'screen',
        navigationOptions: () => ({
            headerBackTitle: null,
            headerTintColor: theme.NAVBAR_TITLE_COLOR,
            headerStyle: {
                backgroundColor: theme.NAVBAR_BG_COLOR,
                borderBottomWidth: 0,
                elevation: 0,
            },
        })
    });

@connect(({ nav }) => ({ nav }))
export default class AppWithNavigationState extends Component {
    componentWillMount() {

        /* 安卓添加返回按钮监听事件 */
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBack);
        }

        fetchInterceptors(this.props.dispatch);
    }

    componentDidMount() {
        /* 隐藏启动屏幕 */
        // SplashScreen.hide();
    }

    /**
     * 返回页面
     * @return {Boolean}
     */
    onBack = () => {
        const { dispatch, nav } = this.props;

        if (nav.index === 0) return false;
        dispatch(NavigationActions.back());
        return true;
    }

    render() {
        return (
            <RootNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })} />
        )
    }
}
