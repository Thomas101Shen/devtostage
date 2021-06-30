import {useState} from 'react'
import {Gallery} from './pgComponents/Gallery'
import React from 'react'
import "./Restoration.css"
import Data from './pgComponents/PicsForDemonstration'

export default function Restoration(){

	return(
		<body className = "background">
			<h1 className="header">Restoration Gallery</h1>
			<Gallery data = {Data}/>
		</body>
		)
}
