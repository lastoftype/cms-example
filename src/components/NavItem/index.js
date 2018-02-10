import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Feather from 'react-feather';
import { NavLink } from 'react-router-dom';

import './NavItem.scss';

export default class NavItem extends Component {
	
	static propTypes = {
		text: PropTypes.string,
		icon: PropTypes.string,
		route: PropTypes.string
	};

	render() {

		const { route, children, icon } = this.props;
		const IconName = Feather[icon];

		return (
			<NavLink to={route} className="nav-item" activeClassName="active">
				<span className="nav-icon"><IconName color="#E5E9ED" size={16} /></span>
				<span className="nav-text">{ children }</span>
			</NavLink>
		);
	}
}
