import React from 'react'
import {FooterText, FooterTextTop, Footer, Image, Signature, SigContainer, SigImage} from './footerStyle'

const footer = () => {
	return (
		<Footer>
			<FooterTextTop>Bedrock Stone and Tile</FooterTextTop>
			<FooterText> Copyright © 2021 </FooterText>
			<div>
				<a href="/contact-us" target="_top"><Image src="https://image.flaticon.com/icons/png/128/546/546394.png" alt="email"/></a>
				<a href="https://www.facebook.com" target="_blank"><Image src="https://image.flaticon.com/icons/png/128/725/725350.png" alt="facebook"/></a>
				<a href="https://www.instagram.com" target="_blank"><Image src="https://image.flaticon.com/icons/png/128/4406/4406253.png" alt="instagram"/></a>
			</div>
			<SigContainer>
			<a href = 'https://www.linkedin.com/in/thomas-shen-976067186/' target="_blank"><SigImage src="https://image.flaticon.com/icons/png/128/1384/1384088.png"/></a>
			<a href = 'https://www.github.com/thomas101shen' target="_blank"><SigImage src="https://image.flaticon.com/icons/png/128/733/733609.png"/></a>
			</SigContainer>
		</Footer>
	)
}

export default footer