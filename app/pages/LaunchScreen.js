import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import fetch from 'sx-fetch/src';

import Storage from '../utils/Storage';
import NavigationUtil from '../utils/NavigationUtil';
import PageView from '../pages/common/PageView'

export default class LaunchScreen extends Component {
	static navigationOptions = {
		header: null
	}

	componentWillMount() {

		/* 判断是否存在 token */
		Storage.load({
			key: 'loginData',
		}).then(res => {
			if (res['auth-token']) {
				fetch.axiosInstance.defaults.headers['auth-token'] = res['auth-token'];
				this.goToTabPage();
			} else {
				this.goToTabPage();
				// this.goToWelcomePage();
			}
		}).catch(err => {
			this.goToTabPage();
		});
	}

	/**
	 * 跳转到欢迎页面
	 * @return {void}
	 */
	goToWelcomePage = () => {
		NavigationUtil.reset(this.props.navigation, 'Welcome');
	}

	/**
	 * 跳转到首页
	 * @return {void}
	 */
	goToTabPage = () => {
		NavigationUtil.reset(this.props.navigation, 'Tab');
	}

	render() {
		return (
			<PageView scroll={false} style={{ paddingTop: 50 }}>
				<ActivityIndicator />
			</PageView>
		);
	}
}