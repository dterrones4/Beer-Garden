import React, { Component } from 'react';
import NavBtn from './nav-btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './mobile-nav.css';

export default class MobileNav extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			display: 'dropDown'
		}
	}

	changeBtn(){
		if(this.state.display === 'dropDown'){
			this.setState({
				display: 'x'
			});
			console.log('event fired')
		}
		if(this.state.display === 'x'){
			this.setState({
				display: 'dropDown'
			});
		}
	}

	render() {
		if(this.state.display === 'dropDown'){
			return <NavBtn onClick={e => this.changeBtn()} btn={this.state.display}/>
		}
		else{
			return (
				<div className='mobile-nav'>
				<NavBtn onClick={e => this.changeBtn()} btn={this.state.display}/>
					<div className='mobile-links'>
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
}
