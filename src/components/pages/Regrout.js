import {Gallery} from './pgComponents/Gallery'
import React from 'react'
import "./Regrout.css"
import Data from './pgComponents/PicsForDemonstration'

export default function Regrout(){

	return(
		<body className = "background">
			<h1 className="header">Regrout Gallery</h1>
			<Gallery data = {Data}/>
		</body>
		)
}
