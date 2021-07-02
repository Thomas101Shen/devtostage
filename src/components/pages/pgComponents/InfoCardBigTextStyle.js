import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Body = styled.div`
	display: inline-block;
	width: 40vh;
	background: rgba(255, 255, 255, 0.38);
	border: 5px solid rgba(207, 85, 85, 0.33);
	box-sizing: border-box;
	border-radius: 20px;
	:hover {
		background: rgba(255, 255, 255, 0.77);
		border: 5px solid rgba(207, 85, 85);
		cursor: pointer;
  		transition: all 0.5s ease-out;
	}
`

export const Image = styled.img`
	width: 35vh;
	margin: 2vh;
	margin-bottom: 0px;
	object-fit: cover;
	border: 5px solid rgba(207, 85, 85, 0.33);
	:hover {
	border: 5px solid rgba(207, 85, 85);
	transition: all 0.3s ease-out;
	}
`

export const Header = styled.h3`
	font-family: Open Sans;
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	overflow: scroll;
	text-align: center;
	line-height: 65px;
	margin-left: 5px;
	margin-right: 5px;
	margin-top: 0px;
	color: #000000;
	border-bottom: 2px solid rgba(207, 85, 85, 0.33);
	:hover {
	border: 5px solid rgba(207, 85, 85);
	transition: all 0.3s ease-out;
	}
`
export const Text = styled.p`
	font-family: Open Sans;
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	line-height: 33px;
	padding: 5px;
	text-align: center;
	color: #000000;
	`

export const CardLink = styled(Link)`
	cursor: pointer;
`