import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-form-wrapper">
        <div className="container">
          <h1 className="contact-heading">Contact Us</h1>
          <div className="contact-form-flex-container">
            <div className="contact-right-col"></div>
            <div className="contact-left-col">
              <form className="contact-form">
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  className="contact-input"
                />
                <input
                  type="number"
                  placeholder="Mobile"
                  name="mobile"
                  className="contact-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="contact-input"
                />
                <textarea
                  name="msg"
                  placeholder="Your message"
                  className="textarea"
                ></textarea>
                <button type="submit" className="input-submit-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
