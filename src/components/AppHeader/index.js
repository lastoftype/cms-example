import React, { Component } from 'react';
import { ArrowLeft, Settings } from 'react-feather';
import { Link } from 'react-router-dom';

import './AppHeader.scss';

export default class AppHeader extends Component {
	render() {
		return (
			<header className="main-header">
				<span className="header-icon"><ArrowLeft color="#313942" /></span>
				<div className="header-links">
					<span className="header-item"><Settings size={16} color="#313942" /><Link to="/settings">Settings</Link></span>
				</div>
			</header>
		);
	}
}
