import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../fonts.css'

export const Nav = styled.nav`
	background: #3A3C53;
	height: 129px;
	display: flex;
	z-index: 10; //or 999
	align-items: center;
	justify-content: center;
	font-size: 70%;
	width: 100%;
	flex-direction: row;
`

export const NavLogo = styled(Link)`
	align-self: flex-start;
	margin-left: 20px;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	height: 100%;
	width: auto;
	align-self: flex-start;
	`

export const Logo = styled.img`
	object-fit: cover;
	height: 120px;
`

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	text-align: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	background-color: transparent;
	transition: background-color 2s;
	font-family: 'Amaranth', sans-serif;
	font-size: 48px;

	:hover {
		background-color: #515372;
		border: 2px solid  #515372;
		padding: 8px 20px;
		color: #fff;
		cursor: pointer;
		height: 60px;
  		transition: all 0.3s ease-out;
	}
	&.active{
	background: #515372;
	font-size: 48px;
	padding: 8px 20px;
	outline: none;
	border: none;
	color: #fff;
	cursor: pointer;
	height: 60px;
}
`
export const NavPic = styled.img`
height: 36px;
margin: auto;

	@media screen and (max-width: 906px){
		display: none;
	}
`