/**
 * Created by chengkai on 2017/12/24.
 */

import Storage from '../utils/Storage';

/* 区分消息类型保存 */
export const switchMsgTypeCounter = (messageType) => {
    switch (messageType) {
        case 'SYSTEM_MESSAGE': // 系统消息
            loadAndSaveMessageCount('SYSTEM_MESSAGE');
            break;
        case 'ACTIVITY_MESSAGE': // 活动消息
            loadAndSaveMessageCount('ACTIVITY_MESSAGE');
            break
        case 'CARD_HUI': // 卡惠
            loadAndSaveMessageCount('CARD_HUI');
            break;
        default:
            break;
    }
}

/* 对键进行转化(key中不允许使用_) */
export const getKey = (messageType = '') => {
    let typeName;
    switch (messageType) {
        case 'SYSTEM_MESSAGE': // 系统消息
            typeName = 'SYSTEMMESSAGE';
            break;
        case 'ACTIVITY_MESSAGE': // 活动消息
            typeName = 'ACTIVITYMESSAGE';
            break
        case 'CARD_HUI': // 卡惠
            typeName = 'CARDHUI';
            break;
        default:
            typeName = '';
            break;
    }
    return typeName;
}

/* 加载消息数量 */
export const loadAndSaveMessageCount = (key = '') => {
    key = getKey(key);
    Storage.load({
        key: key,
    }).then(res => {
        let msgCount = res.count + 1;
        saveMessageCount(key, msgCount)
    }).catch((err) => {
        saveMessageCount(key, 1)
    });
}

/* 存储消息数量 */
export const saveMessageCount = (key = '', count = 0) => {
    if ('' === key) return; // 保存的key不能为''
    Storage.save({
        key: key,
        data: {
            count
        }
    }).catch((err) => {});
}

/* 加载消息数量 */
export const loadMessageCount = (key = '') => {
    key = getKey(key);
    return new Promise((resolve, reject) => {
        Storage.load({
            key: key,
        }).then(res => {
            resolve(res['count'])
        }).catch((err) => {
            reject(0)
        });
    }).catch(() => {});
}

/* 清空 本地计数 消息数量 */
export const clearLocalMsgCount = () => {
    saveMessageCount(getKey('CARD_HUI'));
    saveMessageCount(getKey('SYSTEM_MESSAGE'));
    saveMessageCount(getKey('ACTIVITY_MESSAGE'));
}