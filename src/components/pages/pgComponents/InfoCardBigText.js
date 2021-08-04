import React from 'react'
import {Image,
		Body,
		Header,
		Text,
}from './InfoCardBigTextStyle'

const InfoCard = ({image, header, text}) => {
	return(
		<Body>
			<Image src={image} alt="Information Card Picture"/>
			<Header>{header}</Header>
			<Text>
			{text}
			</Text>
		</Body>
		)
}

export default InfoCard