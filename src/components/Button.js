import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export function Button() {
	return(
		<Link to='phonecallpg'>
			<button className='btn'>
				Call Us
			</button>
		</Link>
		)
}

export default Button