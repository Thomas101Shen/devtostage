import React from 'react'
import {Label, Body, Hr, ScaleLabel} from './ContactInfoStyle'

const ContactInfo = () => {
	return (<Body>
				<Label>Address: <Hr/> 47 Lakeview Terrace, Waltham, MA 02451 </Label>
				<Label>Email: <Hr/> tshenDevelopment@gmail.com </Label>
				<ScaleLabel>To scale the contact info</ScaleLabel>
			</Body>
	)
}

export default ContactInfo;