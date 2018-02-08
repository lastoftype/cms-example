import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { filterKeys } from '../../lib';

import './Input.scss';

export default class Input extends Component {

	static propTypes = {
		type: PropTypes.oneOf([
				'text',
				'number',
				'date',
				'password',
				'tel',
				'email'
			]),
		id: PropTypes.string,
		inputRef: PropTypes.func,
		componentClass: PropTypes.string
	};

	static defaultProps = {
		componentClass: 'input'
	};

	render() {

		const { type, id, inputRef, className, componentClass: Component } = this.props;
		const elementProps = filterKeys(this.props, Input.propTypes);

		return (
			<Component
		        { ...elementProps }
		        type={ type }
		        id={ id }
		        ref={ inputRef }
		        className={ classNames(className, 'form-control') }/>
		);
	}
}
