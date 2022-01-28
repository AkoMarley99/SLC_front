import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Footer from "../footer";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wi4zkb",
        "template_zp4wjoz",
        form.current,
        "user_sGsbFO8SG3q2yeOvAxR67"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email has been sent");
  };

  return (
    <div className="contact-wrapper-wrapper">
      <div className="contact-wrapper">
        <div className="contact">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="name-wrapper">
              <label className="contact-label">
                Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                className="name-input"
                placeholder="First and Last name"
              />
            </div>

            <div className="email-wrapper">
              <label className="contact-label">
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="user_email"
                className="email-input"
                placeholder="Email"
              />
            </div>

            <div className="type-wrapper">
              <label className="contact-label">Employer or Job Seeker?</label>
              <input
                type="text"
                name="status"
                className="type-input"
                placeholder="Employer or Job Seeker"
              />
            </div>

            <div className="position-wrapper">
              <label className="contact-label">Position</label>
              <input
                type="text"
                name="position"
                className="postion-input"
                placeholder="Position"
              />
            </div>

            <div className="message-wrapper">
              <label className="contact-label">
                Message<span>*</span>
              </label>
              <textarea
                name="message"
                className="message-textarea"
                placeholder="Message"
              />
            </div>
            <div className="contact-button-wrapper">
              <input className="contact-button" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
// #a9a9a9
