import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import * as theme from '../../config/theme.conf';

export default class PageView extends Component {
	render() {
		const {
			scroll = true,
			backgroundColor = theme.PAGE_BG_COLOR,
			style = {},
			children,
			...otherProps,
		} = this.props;

		const _props = {
			style: [{flex: 1, backgroundColor}, style],
			...otherProps
		}

		if(scroll) {
			return (
				<ScrollView {..._props}>{children}</ScrollView>
			);
		}
		return (
			<View {..._props}>{children}</View>
		);
	}
}