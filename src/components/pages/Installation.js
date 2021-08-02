import {Gallery} from './pgComponents/Gallery'
import React from 'react'
import "./Installation.css"
import Data from './pgComponents/PicsForDemonstration'

export default function Installation(){

	return(
		<body className = "background">
			<h1 className="header">Installation Gallery</h1>
			<Gallery data = {Data}/>
		</body>
		)
}
