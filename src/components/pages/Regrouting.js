import {Gallery} from './pgComponents/Gallery'
import React from 'react'
import "./Galleries.css"
import Data from './pgComponents/PicsForDemonstration'

export default function Regrouting(){

	return(
		<body className = "background">
			<h1 className="header">Regrouting Gallery</h1>
			<Gallery data = {Data}/>
		</body>
		)
}
