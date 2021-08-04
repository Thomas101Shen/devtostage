import {Gallery} from './pgComponents/Gallery'
import React from 'react'
import "./Galleries.css"
import Data from './pgComponents/PicsForDemonstration'

export default function Bathrooms(){

	return(
		<body className = "background">
			<h1 className="header">Bathroom Gallery</h1>
			<Gallery data = {Data}/>
		</body>
		)
}
