import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div>
      <div className="contact-wrapper-m">
        <div className="contact-m">
          <form ref={form} onSubmit={sendEmail} className="contact-form-m">
            <div className="name-wrapper-m">
              <label className="contact-label-m">
                Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                className="name-input-m"
                placeholder="First and Last name"
              />
            </div>

            <div className="email-wrapper-m">
              <label className="contact-label-m">
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="user_email"
                className="email-input-m"
                placeholder="Email"
              />
            </div>

            <div className="type-wrapper-m">
              <label className="contact-label-m">Employer or Job Seeker?</label>
              <input
                type="text"
                name="status"
                className="type-input-m"
                placeholder="Employer or Job Seeker"
              />
            </div>

            <div className="position-wrapper-m">
              <label className="contact-label-m">Position</label>
              <input
                type="text"
                name="position"
                className="postion-input-m"
                placeholder="Position"
              />
            </div>

            <div className="message-wrapper-m">
              <label className="contact-label-m">
                Message<span>*</span>
              </label>
              <textarea
                name="message"
                className="message-textarea-m"
                placeholder="Message"
              />
            </div>
            <div className="contact-button-wrapper-m">
              <input className="contact-button-m" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
// #a9a9a9
