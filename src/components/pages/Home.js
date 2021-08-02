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
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut
					</Paragraph>
					<Carousel/>
				</ChildContainer>
			</AboutUsContainer>
		</Body>
		)
}