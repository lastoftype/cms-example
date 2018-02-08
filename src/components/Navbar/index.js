import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem';

import './Navbar.scss';

export default class Navbar extends Component {

	render() {
		return (
			<nav className="navbar">
				<Link to="/" className="nav-home">Home</Link>
				<NavItem 
					route="/edit" 
					icon="Edit">Edit</NavItem>
				<NavItem 
					route="/thing" 
					icon="MessageSquare">Thing</NavItem>
				<NavItem 
					route="/another" 
					icon="Activity">Stuff</NavItem>
				<NavItem 
					route="/articles" 
					icon="Trash">Trash</NavItem>
			</nav>
		);
	}
}
