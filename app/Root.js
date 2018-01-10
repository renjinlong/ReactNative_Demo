import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import fetch from 'sx-fetch/src';

import store from './store';
import AppWithNavigationState from './AppNavigator';
import { BASE_URL, VERSION_CODE } from './config/app.conf';

/* 初始化fetch */
fetch.init({
  baseURL: BASE_URL,
  headers: {
    'auth-version': VERSION_CODE,
  },
  onShowErrorTip: (err, errorTip) => {

  },
  onShowSuccessTip: (response, successTip) => {

  },
  isMock: (url) => {
    return url.startsWith('/mock');
  }
});

export default class App extends Component<{}> {
  render() {
    return (
      < Provider store={store} >
        <AppWithNavigationState />
      </Provider >
    );
  }
}

// 取消警告
console.disableYellowBox = true;
