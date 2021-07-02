import {
	TextStyle,
	Intro,
	ImgStyle,
	ImgStyle1,
	HeaderContainer,
	Hr,
	Scaler,
	Body,
	AboutUsContainer,
	Paragraph,
	AboutUsHeader,
	TextContainer,
	ChildContainer,
	Slider,
	SliderText,
} from './HomeElements'
import Images from './pgComponents/demoPictures'
import React from 'react'

export default function Home() {
	return(

		<Body>
			<HeaderContainer>
			<ImgStyle1 src = 'https://lh3.googleusercontent.com/pw/AM-JKLWgsscqWXQ74hyP-WOysHNPcX0sdC8Xy_wM6LuQnQTWOCk4JAliV9vW-rdfk8d5sQ36WeJY3bHCtgbtbCE4bku3LExC2FRLNuFCF3QrX-cvpmDVRbXwEwSAiJShOVToL9mKNpqRngJUTkcbwsflkhk=w1770-h1138-no?'
			alt="picture"/>
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
					<Slider/>
					<SliderText>Enlargen screen to view slider</SliderText>
				</ChildContainer>
			</AboutUsContainer>
		</Body>
		)
}