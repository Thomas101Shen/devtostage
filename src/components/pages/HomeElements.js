import styled from 'styled-components'
import '../../fonts.css'

export const ImgStyle1 = styled.img`
	width: 100%
`

export const Rectangle = styled.div`
	position: absolute;
	z-index: 10;
	align-self: center;
	margin-top: 5vh;
	height: 296px;
	width: 72%;
	background: rgba(63, 23, 47, 0.72);
`
export const Header = styled.h1`
position: absolute;
z-index: 11;
align-self: center;
text-align: center;
font-family: Oleo Script;
font-style: normal;
font-weight: normal;
font-size: 96px;
line-height: 133px;

color: #FFFFFF;
`
export const Hr = styled.hr`
border: transparent;
`

export const HeaderContainer = styled.div`
	display: flex;
	// flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const TextStyle = styled.div`
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 65px;
	color: #000000;
`
export const Scaler = styled.div`
	color: transparent;
	width: 25%
`

export const Intro = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	flex-direction: row;
	justify-content: space-around;
	background: transparent;
	width: 100%;
	margin: 0px;
	height: 80vh
`
export const Body = styled.body`
	background: #FFC2A8;

`
export const ImgStyle = styled.img`
	width: 50%;
`

export const AboutUsContainer = styled.div`
    display:  flex;
    align-content: space-around;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.38);
    height: 140vh;
    flex-direction: column;
`

export const AboutUsHeader = styled.h1`
	font-family: Oleo Script;
	font-style: normal;
	font-weight: normal;
	font-size: 72px;
	line-height: 100px;
	color: #000000;
	text-align: center;
	vertical-align: text-top;
`

export const Paragraph = styled.p`
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 65px;
	text-align: center;
	color: #000000;
	margin-top: 0px;
	width: 40%;
	align-self: stretch;
`
export const ChildContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-content: center;
	align-items: center;
`

export const TextContainer = styled.div`
	margin: 10px;
`