import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';

const overlayMap = {};

export const confirm = ({
	title = '系统提示',
	message = '',
	onOk = () => {},
	onCancel = () => {},
    negativeBtnText = '取消',
    positiveBtnText = '确定',
}) => {
	Alert.alert(title, message, [
		{ text: negativeBtnText, onPress: onCancel },
		{ text: positiveBtnText, onPress: onOk },
	]);
}

export const alert = ({
	title = '系统提示',
	message = '',
	onOk = () => {},
	overlayKey,
}) => {

	if(overlayKey) {
		if(overlayMap[overlayKey]) return;
		overlayMap[overlayKey] = true;
	}

	const onCancel = () => {
		if(overlayKey) {
			delete overlayMap[overlayKey];
		}
		onOk();
	}

	Alert.alert(title, message, [
		{ text: '确定', onPress: onCancel },
	]);
}