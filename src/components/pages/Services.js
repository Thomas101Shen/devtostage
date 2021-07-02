import React from 'react'
import Items from './pgComponents/demoPictures'
import {Image,
		ImageStyle,
		Header,
		Hype,
		Body,
		InfoCardDiv,
} from './ServiceStyle'
import InfoCard from './pgComponents/InfoCard'
import InfoCardBigText from './pgComponents/InfoCardBigText'
import {Link} from 'react-router-dom'

const Services = () => {
	return (
		<body>
		 <ImageStyle>
	    <Header>Services</Header>
	    <Image  src="https://lh3.googleusercontent.com/pw/AM-JKLXMsWXF9nEwfdP82C7nZhjN8FgaRYuzEg0FdqdE6QGsOUORvB7QOG7FxDQ4UXqfKUi4ZvU3V3BjgOe6odIlLsR6JGYNCzxy9VS8hpOW7Z2HoOBFew7_Ts0gJd9Mb5gIzGv22XQ7RM50mqw3RnUK26U=w2068-h1378-no?authuser=0"
	    alt={"Header background"}/>
	    </ImageStyle>
	    <Body>
		    <Hype>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar, orci id bibendum varius, leo velit efficitur augue, non blandit arcu quam at velit.
			</Hype>
			<InfoCardDiv>
				<Link to="./Installation">
					<InfoCardBigText image = "https://thumbs2.imgbox.com/67/52/6wNXz3ex_t.png"
					header = "Installation"/>
				</Link>
				<Link to="./Regrout">
					<InfoCard image = "https://thumbs2.imgbox.com/e1/df/ev1w7DwJ_t.png"
					header = "Regrout"/>
				</Link>
				<Link to="./Repair">
					<InfoCard image = "https://thumbs2.imgbox.com/6e/2a/l8BmjnJu_t.png"
					header = "Repair"/>
				</Link>
				<Link to="./Restoration">
					<InfoCardBigText image = "https://thumbs2.imgbox.com/34/30/1hhKgvS1_t.png"
					header = "Restoration"/>
				</Link>
			</InfoCardDiv>
		</Body>
		</body>
	)
}

export default Services