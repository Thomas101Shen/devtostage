import styled from 'styled-components'
import '../../fonts.css'

export const Intro1 = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ImgStyle1 = styled.img`
	width: 100%
`

export const Rectangle = styled.div`
	position: absolute;
	width: 1165px;
	height: 552px;
	top: 343px;
	left: 225px;
	background: rgba(63, 23, 47, 0.72);
`

export const HeaderContainer = styled.div`
	display: flex;
	// flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const TextStyle1 = styled.div`
	height: 600px;
	// font-family: 'Dancing Script', cursive;
	font-size: 250px;						/*want to find way to align text and image without having to adjust sizes*/
`
export const Intro2 = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row-reverse;
`

export const ImgStyle2 = styled.img`
	height:600px;
`

export const TextStyle2 = styled.div`
	height: 600px;
	// font-family: 'ZCOOL KuaiLe', cursive;
	font-size: 175px;
  	background: linear-gradient(90deg, rgb(179, 179, 134, 0.7) 0%, rgb(26, 23, 23, 0.5) 100%);
`

export const Paragraph = styled.p`
	/* background-image: url('../../images/pBackground'); background image not loading*/
    display:  block;
    padding:  15px;
`