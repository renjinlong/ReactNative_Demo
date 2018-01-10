import fetch from 'sx-fetch/src';
import { Linking } from 'react-native';

import { resetAction } from './NavigationUtil';
import { Modal } from '../components';
import { clearLocalMsgCount } from './MessageCounter';

/**
 * 请求拦截处理
 * @param  {Object} navigation 组件navigation 对象
 * @return {void}
 */
export default dispatch => {
    fetch.axiosInstance.interceptors.response.use(res => {
        return res;
    }, error => {
        const { status, data } = error.response;

        if (data.code === 401 || status === 401 || data.code === 12002) {
            clearLocalMsgCount(); // 清空本地消息计数
            data.message = '登录失效，请重新登录！';
            // Toast.fail('登录失效，请重新登录！');
            dispatch(resetAction(['Welcome', 'LoginPage'], 1));
        }

        if (status === 400 && data.code === 12006) {
            Modal.alert({
                title: '',
                message: '发现新版本，请下载更新！',
                onOk: () => {
                    Linking.openURL('https://cardlessfront-test.suixingpay.com/d.html');
                },
                overlayKey: 'version_update'
            });
        }

        return Promise.reject(error);
    });
}