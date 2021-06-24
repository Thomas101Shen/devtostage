import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../fonts.css'

export const Nav = styled.nav`
	background: #000;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px ) / 2); {/*ensures the navbar is the same no matter resolution*/}
	z-index: 10; //or 999
`

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
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

`

export const Bars = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 768px){
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate( -100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.div`
	display: flex;
	algin-items: center;
	margin-right: -24px;

	@media screen and (max-width: 768px){
		display: none;
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px){
		display:none;
	}
`

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: 256ce1;
	padding: 10px, 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover{
		transition: all 0.2s ease-in-out;
		background #fff;
		color: #010606;
	}
`