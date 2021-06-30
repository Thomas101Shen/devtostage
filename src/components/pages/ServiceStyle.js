import styled from 'styled-components'
import Regrout from './Regrout'



export const Image = styled.img`
position: relative;
width: 100%;
height: 581px;
left: 0px;
z-index: -1;
object-fit: cover;
`
export const ImageStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 581px;
left: 0px;
background: rgba(177, 105, 105, 0.55);
text-align: center;
`

export const Header = styled.h1`
position: absolute;
align-self: center;
font-family: Oleo Script;
font-style: normal;
font-weight: normal;
font-size: 96px;
line-height: 133px;

color: #FFFFFF;
`

export const Hype = styled.p`
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
white-space: pre-line;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 65px;
text-align: center;
color: #000000;
margin: 100px;
`
export const Body = styled.div`
display: flex;
flex-direction: column;
position: relative;
background: #FFC2A8;
`

export const InfoCardDiv = styled.div`
display: flex;
justify-content: space-around;
margin: 20px;
margin-bottom: 40px;
flex-wrap: wrap;
`