import styled from 'styled-components'

export const Image = styled.img`
position: relative;
width: 100%;
height: auto;
left: 0px;
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

export const BorderHeader = styled.div`
font-size: 48px;
font-family: Open Sans;
font-weight: 600;
padding: 10px;
text-decoration: underline;
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
padding: 10vh;
`

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
left: -1px;
background: rgba(255, 255, 255, 0.38);
border-radius: 180px 0px;
height: 124vh;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%
`

export const Input = styled.input`
    position: relative;
    border: 1px solid #CF5555;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    color: #CF5555;
    background: transparent;
    height: 5vh;
    width: 40%;
    padding: 2%;
    font-size: 100%;

    &::-webkit-input-placeholder {
        font-family: Open Sans;
        font-size: 100%;
        font-style: normal;
        font-weight: normal;
        color: #CF5555;
        text-align:left;

      }
`
export const AddressInput = styled.input`
    position: relative;
    border: 1px solid #CF5555;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    color: #CF5555;
    background: transparent;
    height: 5vh;
    width: 80%;
    padding: 2%;
    font-size: 100%;

    &::-webkit-input-placeholder {
        font-family: Open Sans;
        font-size: 100%;
        font-style: normal;
        font-weight: normal;
        color: #CF5555;
        text-align:left;

      }
`
export const SmallInput = styled.input`
    position: relative;
    border: 1px solid #CF5555;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    color: #CF5555;
    background: transparent;
    height: 5vh;
    width: 20%;
    padding: 2%;
    font-size: 100%;

    &::-webkit-input-placeholder {
        font-family: Open Sans;
        font-size: 100%;
        font-style: normal;
        font-weight: normal;
        color: #CF5555;
        text-align:left;

      }
`

export const Label = styled.label`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    color: #CF5555;
    `

export const TextAreaInput = styled.textarea`
    position: relative;
    border: 1px solid #CF5555;
    box-sizing: border-box;
    border-radius: 20px;
    text-align: left;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    color: #CF5555;
    background: transparent;
    height: 40vh;
    width: 80%;
    padding: 2%;
    font-size: 100%;

    &::-webkit-input-placeholder {
        font-family: Open Sans;
        font-size: 100%;
        font-style: normal;
        font-weight: normal;
        color: #CF5555;
      }
`

export const Submit = styled.button`
background: #CF5555;
border-radius: 40px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 49px;
width: 206px;
color: #FFFFFF;
`

export const Body = styled.div`
display: flex;
flex-direction: column;
position: relative;
background: #FFC2A8;
`

export const Container = styled.div`
display: flex;
margin-top: 10vh;
margin-bottom: 10vh;
`