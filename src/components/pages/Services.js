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
		    <Hype>We offer a variety of stone and tile services including but not limited to the following information cards.
		    Our trained professionals can waterproof any system including: WEDI, Latricrete, Ardex, and Schluter, and our work
		    speaks for itself. Click on any of the cards to view some of our work.
			</Hype>
			<InfoCardDiv>
				<Link to="./kitchens">
					<InfoCard image = "https://thumbs2.imgbox.com/67/52/6wNXz3ex_t.png"
					header = "Kitchens"
					text="Updating your kitchen not only improves its functionality—it also increases the value of your home"
					/>
				</Link>
				<Link to="./bathrooms">
					<InfoCard image = "https://thumbs2.imgbox.com/e1/df/ev1w7DwJ_t.png"
					header = "Bathrooms"
					text = "A simple upgrade can increase the value of your home. New construction or remodels, we will fit your needs."
					/>
				</Link>
				<Link to="./backsplashes">
					<InfoCardBigText image = "https://thumbs2.imgbox.com/6e/2a/l8BmjnJu_t.png"
					header = "Backsplashes"
					text= 'Updating your backsplash is a simple way to create a great look.'/>
				</Link>
				<Link to="./fireplaces">
					<InfoCard image = "https://thumbs2.imgbox.com/34/30/1hhKgvS1_t.png"
					header = "Fireplaces"
					text = 'A beautiful new fireplace is the best way to create a cozy atmosphere.'
					/>
				</Link>
				<Link to="./regrouting">
					<InfoCardBigText image = "https://thumbs2.imgbox.com/34/30/1hhKgvS1_t.png"
					header = "Regrouting"
					text = 'Repairs and resotration adds a sense of beauty to any room.'
					/>
				</Link>
				<Link to="./waterproofing">
					<InfoCardBigText image = "https://thumbs2.imgbox.com/34/30/1hhKgvS1_t.png"
					header = "Waterproofing"
					text = 'Waterproofing, vapor management, and heavy load distribution enxures the durability and integrity of tile installation.'
					/>
				</Link>
			</InfoCardDiv>
		</Body>
		// </body>
	)
}

export default Services