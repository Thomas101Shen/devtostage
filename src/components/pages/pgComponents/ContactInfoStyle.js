import styled from 'styled-components'

export const Body = styled.body`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 60vh;
`

export const Label = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 49px;
text-align: center;
padding: 10px;

color: #000000;
@media screen and (max-width: 650px){
        font-size: 25px;
    }
@media screen and (max-width: 420px){
    font-size: 16px;
    align-self: center;
}
@media screen and (max-width: 290px){
    font-size: 14px;
    display: inline-block;
}
`

export const Hr = styled.hr`
border-color: rgba(255, 255, 255, 0.38);
`

export const ScaleLabel = styled.div`
color: transparent;
`