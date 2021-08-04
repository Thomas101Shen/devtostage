import {Gallery} from './pgComponents/Gallery'
import React from 'react'
import "./Galleries.css"
import Data from './pgComponents/PicsForDemonstration'

export default function Waterproofing(){

	return(
		<body className = "background">
			<h1 className="header">Waterproofing Gallery</h1>
			<Gallery data = {Data}/>
		</body>
		)
}
