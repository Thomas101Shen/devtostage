import React from 'react'
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavPic,
} from './NavbarElements'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import  './Navbar.css';
import Dropdown from './Dropdown'

function Navbar() {

	const [click, setClick] = useState(false)
	const [dropdown, setDropdown] = useState(false)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const onMouseEnter = () =>{
		(window.innerWidth < 960 ? setDropdown(false) : setDropdown(true))
	}
	const onMouseLeave = () =>{
		(setDropdown(false))
	}

	return (
		<nav className='navbar'>
			<Link exact to='/' className = 'navbar-logo' onClick={closeMobileMenu}>
				<blockquote class="imgur-embed-pub" lang="en" data-id="Te0vhdx" data-context="false" >
				<a href="//imgur.com/Te0vhdx"></a>PICTURESS</blockquote>
				<script async src="//s.imgur.com/min/embed.js" charset="utf-8">
				</script>
			</Link>
		<div className = 'menu-icon' onClick = {handleClick} >
			<i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
		</div>
		<ul className = {click ? 'nav-menu active' : 'nav-menu'}>
			<li className = 'nav-item'>
				<NavLink exact to='/'
				onClick = {closeMobileMenu}>
					Home
				</NavLink>
			</li>
			<NavPic src = 'https://images2.imgbox.com/1c/08/X8WIO2Ht_o.png' alt = 'Navbar pic' />
			<li className = 'nav-item'
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}>
				<NavLink
				to = '/services'
				onClick = {closeMobileMenu}
				>
					Tile & Stone Services <i className = 'fas fa-caret-down'/>
				</NavLink>
				{dropdown && <Dropdown/>}
			</li>
			<NavPic src = 'https://images2.imgbox.com/1c/08/X8WIO2Ht_o.png' alt = 'Navbar pic' />
			<li className = 'nav-item'>
				<NavLink to = '/contact-us'
				onClick = {closeMobileMenu} >
					Contact Us
				</NavLink>
			</li>
		</ul>
		</nav>
	)
}

export default Navbar