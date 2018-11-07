import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav-btn.css'

export default function NavBtn(props) {
	if(props.btn === 'dropDown'){
	return <button onClick={props.onClick} className='nav-btn'><FontAwesomeIcon icon='bars' size='2x'/></button>
	}
	else{
		return <button onClick={props.onClick} className='nav-btn'>X</button>
	}
}

