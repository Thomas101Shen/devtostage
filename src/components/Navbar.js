import React from 'react'
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavPic,
	NavLogo,
	Logo,
} from './NavbarElements'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import  './Navbar.css';

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
		<Nav>
		<NavLogo exact to = '/'>
		<Logo src = 'https://lh3.googleusercontent.com/pw/AM-JKLVBj99k3GVbKCXLxPs1shiDotrpb1x2g76zRzQT3zUTh664zivPl5em77NYUbpL7Ihx2HRsNQ_WlCabQ2j8cls5tYhuP5JwHXbNWDoEm8URQ-G-nDSvAEIpKfpuU0Y-SpviME7qqCIqYZyn1O_vWDKh=w849-h584-no' alt='logo'/>
		</NavLogo>
		<div className = 'menu-icon' onClick = {handleClick} >
			<i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
		</div>
			<ul className = {click ? 'nav-menu active' : 'nav-menu'}>
				<li className = 'nav-item'>
					<NavLink className = "nav-links" exact to='/'
					onClick = {closeMobileMenu}>
						Home
					</NavLink>
				</li>
				<NavPic src = 'https://images2.imgbox.com/1c/08/X8WIO2Ht_o.png' alt = 'Navbar pic'/>
				<li className = 'nav-item'
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}>
					<NavLink className = "nav-links"
					to = '/services'
					onClick = {closeMobileMenu}
					>
						Services
					</NavLink>
				</li>
				<NavPic src = 'https://images2.imgbox.com/1c/08/X8WIO2Ht_o.png' alt = 'Navbar pic' />
				<li className = 'nav-item'>
					<NavLink className = "nav-links" to = '/contact-us'
					onClick = {closeMobileMenu} >
						Contact Us
					</NavLink>
				</li>
			</ul>
		</Nav>
	)
}

export default Navbar