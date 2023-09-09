import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Result = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-highlight font-bold text-5xl">
        Your message has been successfully sent!
      </p>
    </div>
  );
};

export const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fved4dq",
        "template_1qmk29z",
        form.current,
        "26Q2dDmAkcB0yghVS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showResult(true);
  };

  return (
    <div className="form-body">
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="fullName" />
        <label>Phone Number</label>
        <input type="text" name="phone" required />
        <label>Enter Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea className="message" name="message" required />
        <input type="submit" value="Send" />
        <div className="row">{result ? <Result /> : null}</div>
        
      </form>
    </div>
  );
};
