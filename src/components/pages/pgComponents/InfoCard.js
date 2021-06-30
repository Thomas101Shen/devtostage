import React from 'react'
import {Image,
		Body,
		Header,
		Text,
}from './InfoCardStyle'

const InfoCard = ({image, header, text}) => {
	return(
		<Body>
			<Image src={image} alt="Information Card Picture"/>
			<Header>{header}</Header>
			<Text>
			Donec vehicula molestie nisl, quis sagittis dolor consequat ac. Duis auctor sem id felis ullamcorper iaculis. Nulla euismod nisi eu magna blandit fringilla. Maecenas laoreet sapien sed orci luctus, sed blandit ligula cursus. Sed tellus mi, mollis quis nulla non, eleifend euismod lectus. In tempor dignissim elit sed consectetur.
			</Text>
		</Body>
		)
}

export default InfoCard