import {
	TextStyle,
	Intro,
	ImgStyle,
	ImgStyle1,
	HeaderContainer,
	Scaler,
	Body,
	AboutUsContainer,
	Paragraph,
	AboutUsHeader,
	TextContainer,
	ChildContainer,
} from './HomeElements'
import './home.css'
import Images from './pgComponents/demoPictures'
import React from 'react'
import Carousel from './pgComponents/Carousel'

export default function Home() {
	return(

		<Body>
			<HeaderContainer>
			<ImgStyle1 src = 'https://lh3.googleusercontent.com/pw/AM-JKLWygvIMJ8RXyEUVBY1cHBuZNsQltThjOMLBKPz6YX7Rbty8frln9SvZfKbjxYJTJrHeYRDRbgMVpJEQsHJuN4ZFb15ek6IzTHrdXLE-V9-UOlchku1tbiKYY7QMiZv9Nejf08Tw9GBXfisad1eGgoI=w1720-h1106-no'
			alt="picture"/>
			</HeaderContainer>
			<Intro>
				<Scaler>lorem ipsum</Scaler>
				<div>
					<ImgStyle src="https://images2.imgbox.com/c7/d3/b39M9tOO_o.png" alt="Quality service pic"/>
					<TextStyle id = 'text'>
				Quality <br /> Services...</TextStyle>
				</div>
				<div>
					<ImgStyle src ="https://images2.imgbox.com/b0/05/DIQ2dlCV_o.png" alt="customer experience pic"/>
					<TextStyle id = 'text'>
					...And great <br/> Customer <br/> Experience
					</TextStyle>
				</div>
			</Intro>

			<AboutUsContainer>
				<AboutUsHeader className = 'header'>About Us</AboutUsHeader>
				<ChildContainer>
					<Paragraph className = 'intro_text'>
					At Bedrock Stone and Tile we are all about offering the best services and customer experience.
					Whether it be a big or small project, your home is your home and whatever rennovation or service you
					are contemplating will have a big impact on your life. At Bedrock Stone and Tile, we are all about providing
					you with a great experience. With over 50 years of combined work experience in the greater Boston area and New England,
					our services are sure to leave you more than satisfied. Like bedrock, we can support anything.
					</Paragraph>
					<Carousel/>
				</ChildContainer>
			</AboutUsContainer>
		</Body>
		)
}