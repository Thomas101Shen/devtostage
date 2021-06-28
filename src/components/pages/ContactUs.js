import React, { useState } from "react";
import {Image,
        Hype,
        ImageStyle,
        Header,
        Break,
        Form,
        Body,
        Input,
        BorderHeader,
        TextAreaInput,
        InputContainer,
        AddressInput,
        SmallInput,
        Submit,
        Container,
      }
from './ContactUsStyle'
import {Map} from './pgComponents/Map'
import ContactInfo from './pgComponents/ContactInfo'

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
    let response = await fetch("https://dev-to-stage-backend.herokuapp.com/api", {
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
    We are here to service you. Have questions, ideas, or need an estimate? Call us within business hours or email/message us at tshendevelopment@gmail.com!
    <BorderHeader> Schedule </BorderHeader> Monday-Friday: 8:00am - 9:00pm <br/> Saturday-Sunday: 9:00am - 3:00pm
    </Hype>
    <Form onSubmit={handleSubmit}>
        <InputContainer>

            <Input type="text" id="firstName" placeholder = 'first name' required />

            <Input type="text" id="lastName" placeholder = 'last name' defaultrequired />

        </InputContainer>
        <InputContainer>
        <Input type="email" id="email" placeholder = 'email address' required />
       <Input type="tel" id="phone" placeholder = 'Phone number ex: 1-234-567-8901' pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        </InputContainer>
        <AddressInput type="text" placeholder = 'address' id="address"/>
      <InputContainer>
        <SmallInput type="text" id="city" placeholder = 'City'/>
        <SmallInput type="text" id="state" placeholder = 'State'/>
        <SmallInput type="text" id="zip" placeholder = 'Zip'/>
      </InputContainer>
      <TextAreaInput id="message" placeholder = 'Questions/Comments' required />
      <Submit type="submit">{status}</Submit>
    </Form>
    <Container>
      <ContactInfo></ContactInfo>
      <Map></Map>
    </Container>
    </Body>
    </body>
  );
};

export default ContactUs;