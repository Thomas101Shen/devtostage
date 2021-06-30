import {
	TextStyle,
	Intro,
	ImgStyle,
	ImgStyle1,
	Rectangle,
	HeaderContainer,
	Header,
	Hr,
	Scaler,
	Body,
	AboutUsContainer,
	Paragraph,
	AboutUsHeader,
	TextContainer,
	ChildContainer,
} from './HomeElements'
import Carousel from './pgComponents/Carousel'
import Images from './pgComponents/demoPictures'
import React from 'react'

export default function Home() {
	return(

		<Body>
			<HeaderContainer>
			<Rectangle></Rectangle>
			<Header>Bedrock Stone <Hr/> and Tile</Header>
			<ImgStyle1 src = 'https://images2.imgbox.com/00/05/5jEkOs2I_o.png' alt="picture"/>
			</HeaderContainer>
			<Intro>
				<Scaler>lorem ipsum</Scaler>
				<div>
					<ImgStyle src="https://images2.imgbox.com/c7/d3/b39M9tOO_o.png" alt="Quality service pic"/>
					<TextStyle>
				Quality <br /> Services...</TextStyle>
				</div>
				<div>
					<ImgStyle src ="https://images2.imgbox.com/b0/05/DIQ2dlCV_o.png" alt="customer experience pic"/>
					<TextStyle>
					...And great <br/> Customer <br/> Experience</TextStyle>
				</div>
			</Intro>

			<AboutUsContainer>
				<AboutUsHeader>About Us</AboutUsHeader>
				<ChildContainer>
					<Paragraph>
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