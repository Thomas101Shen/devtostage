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
	SliderTransition,
} from './HomeElements'
import {useState} from 'react'
import './home.css'
import React from 'react'
import Arrow from './pgComponents/Arrow'

import {isBrowser} from 'react-device-detect'

export default function Home() {


	  const images = [
	  'https://lh3.googleusercontent.com/pw/AM-JKLUmEX_XYbL2QYJ0kMfGzWX86HwWgZ4FpPmE0qwqXJt__yBaUE-I4Fj2NaUnITc_SDg-nUAJbtYpfQJ7OqSWT1fzZzGHSiMx72z3T1FvIgWsxxK3EGLuIWPvDWMdkNSV-qoBxFFl9RguqlZ1YJyjA7Gw=w1600-h1029-no',
	  'https://lh3.googleusercontent.com/pw/AM-JKLULx1NQ-5hHBtkzRioHJPNETRwnz_RajKluo5uicy_oIms0QnBFgnzaODDJSMLPzt5HeJq7ktUy1uPn8pk4jPqL_6k8rfYhHfrU4OVixsdKlNmegLdT6YMrpLZVIiLpfaLUBhmZ2mQIEoObT46dJBLt=w1603-h1029-no',
	  'https://lh3.googleusercontent.com/pw/AM-JKLVl_kb8A_GBqZ0uXFLx77dpmKbQ6Q6LEi9qNBt9173UikqAw0tpFVd5Jjjw1lkMWD6_b2CHK4Ga63l09XJPcduiVd5I_ZZW-KKUUUpgqujjAHqlVOK4ppNqxgs_f5beceNWiB7riN_VRAfCXI3g4DwN=w1600-h1029-no'
	  ]

	  const getWidth = () => window.innerWidth

	  const [state, setState] = useState({
	  	activeIndex: 0,
	    translate: 0,
	    transition: 0.45
	  })

	  const { translate, transition, activeIndex } = state
	  const nextSlide = () => {
	    if (activeIndex === 2) {
	      return setState({
	        ...state,
	        translate: 0,
	        activeIndex: 0
	      })
	    }

	    setState({
	      ...state,
	      activeIndex: activeIndex + 1,
		  translate: ( isBrowser ? ((activeIndex + 1) * (-getWidth()+15)) : (activeIndex+1) * -getWidth())
	    })
	  }

	  const prevSlide = () => {
	    if (activeIndex === 0) {
	      return setState({
	        ...state,
	        translate: -2 * (getWidth()-15),
	        activeIndex: 2
	      })
	    }

	    setState({
	      ...state,
	      activeIndex: activeIndex - 1,
	      translate: (isBrowser ? (activeIndex-1)*(-getWidth()+15) : (activeIndex-1) * (-getWidth()) )
	    })
	  }

	  console.log(getWidth(), activeIndex)
	  console.log(isBrowser)
	  console.log(translate)
	return(
		<Body>
			<HeaderContainer>
				<SliderTransition
				translate = {translate}
				transition = {transition}
				width = { isBrowser ? (getWidth()-15) * images.length : getWidth() * images.length}
				>
				{images.map((image) => (
					<ImgStyle1 src = {image}
					alt="picture"/>
					))}
				</SliderTransition>
				<Arrow direction = 'right' handleClick = {nextSlide}/>
				<Arrow direction = 'left' handleClick = {prevSlide}/>
			</HeaderContainer>
			<Intro>
				<Scaler>lorem ipsum</Scaler>
				<div>
					<ImgStyle src="https://images2.imgbox.com/c7/d3/b39M9tOO_o.png" alt="Quality service pic"/>
				</div>
				<div>
					<ImgStyle src ="https://images2.imgbox.com/b0/05/DIQ2dlCV_o.png" alt="customer experience pic"/>
				</div>
			</Intro>
			<Intro>

					<TextStyle id = 'text'>
				Quality <br /> Services...</TextStyle>
					<TextStyle id = 'text'>
					...And great <br/> Customer <br/> Experience
					</TextStyle>
			</Intro>

			<AboutUsContainer>
				<AboutUsHeader className = 'header'>About Us</AboutUsHeader>
					<Paragraph>
					This was originally a website I was making for a friend, however, things did
					not go as originally planned and I never finished it. I am now using it as a
					display of my skills in learning new frameworks and technical versatility.
					Reach out to me at tshen595@gmail.com if interested. Hopefully you enjoy your
					experience here! Some of the features and pictures are not working because
					certain libraries are outdated (e.g flask_mail for the contact form). This
					website is from 2021.
					</Paragraph>
			</AboutUsContainer>
		</Body>
		)
}