


import React, { useState } from "react";
import "./index.css"
// const main = require('./nodeEmailer')
export default function App() {

  // let data = "hello"
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Message: ""
  })
  async function submitForm(e) {
    e.preventDefault();
    console.log("submited data", formInput);
  //  await  main({...formInput , subject:"Conatct us", })
   setFormInput({
    firstName: "",
    lastName: "",
    email: "",
    Message: ""
   })
  }

  const handelInput = (e) => {
    const value = e.target.value
    setFormInput({ ...formInput, [e.target.name]: value })
  }

  return (

    <div class="form-container">
      <h1>Contact Us</h1>
      <form class="register-form" autoComplete="off" onSubmit={submitForm}>

        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formInput.firstName}
          onChange={handelInput}
        />

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formInput.lastName}
          onChange={handelInput}
        />
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={formInput.email}
          onChange={handelInput}
        />
        <input
          id="Message"
          class="form-field"
          type="text"
          placeholder="Message"
          name="Message"
          value={formInput.Message}
          onChange={handelInput}
        />

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>

  );
}