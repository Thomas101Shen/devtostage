import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../fonts.css'

export const Nav = styled.nav`
	background: #5D3033;
	height: 80px;
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
	font-family: Oleo Script, cursive;
	font-size: 48px;

	:hover {
		background-color: #CF5555;
		border: 2px solid  #CF5555;
		border-radius: 4px;
		padding: 8px 20px;
		border-radius: 12px;
		font-size: 48px;
		color: #fff;
		cursor: pointer;
		height: 60px;
  		transition: all 0.3s ease-out;
	}
	&.active{
	background: #CF5555;
	padding: 8px 20px;
	border-radius: 12px;
	outline: none;
	border: none;
	color: #fff;
	cursor: pointer;
	height: 60px;
}
`
export const NavPic = styled.img`
// position: absolute;
left: 47.42%;
right: 48.12%;
top: 33.14%;
bottom: 28.99%;

	@media screen and (max-width: 980px){
		display: none;
	}
`