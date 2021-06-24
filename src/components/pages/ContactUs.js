import React, { useState } from "react";
import {Image,
        Hype,
        ImageStyle,
        Header,
        Break,
        Form,
        Body,
        FloatContainer,
        Input,
      }
from './ContactUsStyle'
const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const { firstName, lastName, phone, address, city, state, zip, email, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      address: address.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://dev-to-stage-backend.herokuapp.com/", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");

    let result = await response.json();
    alert(result.status);
  };
  return (
    <body>
    <ImageStyle>
    <Header>Contact Us</Header>
    <Image src="https://images2.imgbox.com/28/ca/J1TmjxwS_o.jpg" alt="Contact Us picture"/>
    </ImageStyle>
    <Body>
    <Hype>
    We are here to service you. Have questions, ideas, or need an estimate? Call us within business hours or email/message us at anytime!
    <Break/> Schedule <Break/> Monday-Friday: 8:00am - 9:00pm Saturday-Sunday: 9:00am - 3:00pm
    </Hype>
    <Form onSubmit={handleSubmit}>
      <FloatContainer>
        <label htmlFor="firstName">First Name:</label>
        <Input type="text" id="firstName" placeholder = 'first name' required />

        <label htmlFor="lastName">Last Name:</label>
        <Input type="text" id="lastName" placeholder = 'last name' defaultrequired />
      </FloatContainer>
      <div>
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" placeholder = 'email address' required />
      <div>
        <label htmlFor="phone">Phone no.:</label>
        <Input type="tel" id="phone" placeholder = '1-234-567-8901' pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}" />
      </div>
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <Input type="text" placeholder = 'address' id="address"/>
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <Input type="text" id="city" placeholder = 'City'/>
        <label htmlFor="state">State:</label>
        <Input type="text" id="state" placeholder = 'State'/>
        <label htmlFor="zip">Zip:</label>
        <Input type="text" id="zip" placeholder = 'Zip'/>
      </div>
      <div>
        <label htmlFor="message">Questions/Comments:</label>
        <textarea id="message" placeholder = 'Questions/Comments' required />
      </div>
      <button type="submit">{status}</button>
    </Form>
    </Body>
    </body>
  );
};

export default ContactUs;