import styled from 'styled-components'
import '../../fonts.css'



export const ImgStyle1 = styled.img`
	width: 100%;
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
	background: transparent;
	padding: auto;
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
	margin: auto;
	margin-top: 0px;
	margin-bottom: 10px;
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

	@media screen and (max-width: 650px){
		font-size: 28px;
	}
	@media screen and (max-width: 420px){
		font-size: 25px;
		align-self: center;
	}
`
export const ChildContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-content: center;
	align-items: center;
	
	@media screen and (max-width: 420px){
		flex-direction: column;
	}
`

export const TextContainer = styled.div`
	margin: 10px;
`

