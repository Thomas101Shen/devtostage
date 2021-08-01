import React from 'react'
import {Label, Body, Hr, ScaleLabel} from './ContactInfoStyle'

const ContactInfo = () => {
	return (<Body>
				<Label>Areas of operation:<Hr/>Greater New England Area </Label>
				<Label>Email: <Hr/> email.com </Label>
				<ScaleLabel>To scale the contact info</ScaleLabel>
			</Body>
	)
}

export default ContactInfo