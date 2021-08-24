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
        TextFieldStyled,
      }
from './ContactUsStyle'
import {Map} from './pgComponents/Map'
import ContactInfo from './pgComponents/ContactInfo'
import TextField from '@material-ui/core/TextField'
import './ContactUs.css'

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
            <TextField varient='outlined' label='first name' type="text" id="firstName" className = 'regInput' required />

            <TextField varient='outlined' label='last name' type="text" id="lastName" className = 'regInput' required />
        </InputContainer>
        <InputContainer>
        <TextField label='email' type="email" id="email" varient='outlined' placeholder='user@example.com' className = 'regInput' required />
       <TextField type="tel" label='phone no.' id="phone" placeholder = '123-456-7890' pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}" className = 'regInput' />
        </InputContainer>
        <TextField  varient='outlined' label='street address' type="text" placeholder = 'street address' id="address" className='address'/>
      <InputContainer>
        <TextField varient='outlined' label = 'City' type="text" id="city" placeholder = 'City' className = 'smallInput'/>
        <TextField varient='outlined' label='State' type="text" id="state" placeholder = 'State' className = 'smallInput'/>
        <TextField varient='outlined' label='Zip' type="number" id="zip" placeholder = 'Zip' className = 'smallInput'/>
      </InputContainer>
      <TextField label = 'Message' id="message" placeholder = 'Message' className = 'message' multiline rows={6} required />
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