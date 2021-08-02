
import {Gallery} from './pgComponents/Gallery'
import React from 'react'
import "./Repair.css"
import Data from './pgComponents/PicsForDemonstration'

export default function Repair(){

	return(
		<body className = "background">
			<h1 className="header">Repair Gallery</h1>
			<Gallery data = {Data}/>
		</body>
		)
}
