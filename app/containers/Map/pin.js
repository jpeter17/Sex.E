import React from 'react';
import PropTypes from 'prop-types';
import {pinStyle} from './pin_style.js';

export default class Pin extends React.Component {
	static propTypes = {
		text: PropTypes.string
	};

	static defaultProps = {};


	render() {
		return (
			<div style = {pinStyle}>
				{this.props.text}
			</div>
		);
	}
}
