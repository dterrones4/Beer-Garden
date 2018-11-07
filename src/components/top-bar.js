import React, { Component } from 'react';
import './top-bar.css';
import Logo from '../Beer_garden_logo.png';


class TopBar extends Component {
  render() {
    return (
			<div className='top-bar'>
				<div className='nav'>
					<ul>
						<li><a href='#'>Home</a></li>
						<li><a href='#'>Beer</a></li>
						<li><a href='#'>Food</a></li>
						<li><a href='#'>Wine</a></li>
						<li><a href='#'>Contact</a></li>
					</ul>
				</div>
			</div>
    );
  }
}

export default TopBar;
