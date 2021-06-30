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
	    <Image  src="https://lh3.googleusercontent.com/e1saRP9jddpEoLwNzH4wnyruScQyfUWNXrKVLlEA7Ktwz_5VT49PqVNBWJmBKJOmdE91xBt0hRADvy--jzkLVjvMUFElmXigN4NVPALOjPSLwB2qWovb1ncocddr7iPfvOdXE_Bb3GvCoJccSsmVQw5_Hlfu9gOshvZdMRHvU-5KnY8enOUyOqWkwbzPdhtPckbgFlbjA57E5DsWbmiFVIIjd8VnsqH3eJVKCR07tdH3G5Xa-E0-NupJxyWOWXd4e7u_se3KCZkfUli7aFE6fnxshZOabXGSNVCn5692an2cWbMfptWuZpLhcfr9eRlEqgLy5MdNGmGRqHyHllDh3a9y4ZFPLgyMgvnro0ahc18Ho4YLj_b1uZ0UZV920zMgvKS38b5M6g4Hq8jf1uaxLYOiaGBYMnZKlo6hGalJ7_y3QK71Wz-HnHkAucVKzwFGNHtIRfqb8qZeSYsO55kA2t9Rje2NlRo_cf2Wzzcmab85ul18BjYAiPY0OQGt1XhWjAIQTP4_Te8UojO7FOUEKyImUabKnL219b_DESKFCP14bVGz3Qbt9Hs2sySpJ8pIB5UkoqqtqHaI0bkDnENwYfelpGNN_Eab3x-U5IkUWFT5I18E8t9yW9jCx0VhSsfyBRGTwFgtcpthoCiLDsmTFC8TXAz9y-0HNaPrJZ_irbR6LnN5v54EbAziRKaUqu0ZYFxQTDiCnHpAt5RIQjjTqg=w1122-h748-no?"
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