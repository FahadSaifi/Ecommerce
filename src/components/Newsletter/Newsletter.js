import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="newletter-wrapper">
        <div className="container">
          <h5 className="subscribe-heading">SUBSCRIBE NOW</h5>
          <h2 className="stay-update-heading">
            Stay up to date
            <br />
            with our Newsletter
          </h2>
          <div className="newsletter-form">
            <form action="" className="newsletter-form">
              <input
                type="text"
                className="subscribe-field"
                name="Name:"
                placeholder="Email"
              />
              <button type="submit" className="newsletter-submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="newsletter-tagline">
            <p className="recieve-emails-text">
              Let's Subscribe our newslleter to recieve all of our latest
              notifications
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
