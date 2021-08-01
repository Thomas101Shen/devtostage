import React, { useState } from "react";
import {Image,
        Hype,
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
    <Body>
    <Image src='https://lh3.googleusercontent.com/pw/AM-JKLWc16H1F1NhiBziHAQpTwmq_HHI_yHlaUVJghk04W0YmF0exUfywSGenh49xB3l5wpOkIDMFeXnnUilRvw2ZoRHBgqRdN3-EhuMH8jWzyNeE6zT6HLoc60kFJlZmCi1o1j2wppvfzoj5Tf-yK2i97o=w1830-h1106-no' alt='header pic' />
    <Hype>
    We are here to service you. Have questions, ideas, or need an estimate? Call us within business hours or email/message us at email.com!
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
    </Container>
    </Body>
    // </body>
  );
};

export default ContactUs;