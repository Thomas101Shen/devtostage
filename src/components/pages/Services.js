import React from 'react'
import Items from './pgComponents/demoPictures'
import './Services.css'
import {Image,
		ImageStyle,
		Header,
		Hype,
		Body,
		InfoCardDiv,
} from './ServiceStyle'
import InfoCard from './pgComponents/InfoCard'
import {Link} from 'react-router-dom'

const Services = () => {
	return (
		<body>
		 <ImageStyle>
	    <Header>Services</Header>
	    <Image  src="https://lh3.googleusercontent.com/n-GYa9hE5VaIj--8Jk3b5aWg8-0IRmd3xPywJHQZga83nasfNY-lbm8k2TLaDR_Nv4ukXOoDiNgvLRzPwTE99wCP-FHUruttRZNNXBG26KQhYcbnF2MOm19mdADvTEYK07uAGwJEu7HS7aCg9Fo6nus2wWmOydOGDK0r02tEtHbNWQY6HG06VvoYqx6R4h4x5ABHknCjvMkhY9UDi7EreezWHA1PlUe9KFk0z2wD_cZ4vNQEC1ob11vbpsKx4j2FAOoIiNaxk7ue3-WtCSOEdzIqtSV52HjMct7V3xbCXPebfaSgYndP-rw7Z-mDTqRy_YnYgXFs-p-Plb6DEHLagBUdxR7zfHTcliY0jcVA_YQaZlWTcorf4XFx8xqTTOwY2_khm_tbpM55Os1NZ2WRpGfmhW84QI560n3yz5veCU-mEfQaupJ8BoaXf-J6VGnfjrUnD_OZbBC7X3q4qaat0PEJhAAoFsRdOssUgbtF1H8FE1tASTtir1rbvm4YOmUV716LrN3xhXfroLIqsjO3pyd1hwzIUZ319PU7ZQYUhl0JbkqUMpyxZT8Ae0_htMMjELeSNCYttAjLjzWAllPwqs9MM1g7MyYAq5qScEiTLN0fu9ltka3HgY_OGZtJOANG_coi8RGpalS9Lq_72EFk9S3ifcglZG_Ati1y5fY9uNqGOPZAO0ovVHGJbAH51k1BtWGBqjww9DkgVEwleTP1wJtK6SfRZS7Lt3spRA5DsdcFBu_7OoBt20sWv2CzvgoRFy3nz2xIW2LT43E=w108-h72-no"
	    alt={"Header background"}/>
	    </ImageStyle>
	    <Body>
		    <Hype>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar, orci id bibendum varius, leo velit efficitur augue, non blandit arcu quam at velit.
			</Hype>
			<InfoCardDiv>
				<Link to="./Installation">
					<InfoCard image = "https://thumbs2.imgbox.com/67/52/6wNXz3ex_t.png"
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
					<InfoCard image = "https://thumbs2.imgbox.com/34/30/1hhKgvS1_t.png"
					header = "Restoration"/>
				</Link>
			</InfoCardDiv>
		</Body>
		</body>
	)
}

export default Services