import React from 'react'
import Items from './pgComponents/demoPictures'
import {Image,
		Hype,
		Body,
		InfoCardDiv,
} from './ServiceStyle'
import InfoCard from './pgComponents/InfoCard'
import InfoCardBigText from './pgComponents/InfoCardBigText'
import {Link} from 'react-router-dom'

const Services = () => {
	return (

	    <Body>
	 		<Image src='https://lh3.googleusercontent.com/pw/AM-JKLWS0FEPH6ADYiBbt_yiJlwGx-HxzwgSl6xEYHnt0mUnzS5ND-aLnyzqKMTownlbZp7cHJzB632alDyhPQx9JTSuMkdctw-s3e5y_uxTWDeUB5PZceqfWapYO4icmiU0XlZ23eaKq857JTn2ae8ypN4=w1832-h1106-no' alt='header pic'/>
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
		// </body>
	)
}

export default Services