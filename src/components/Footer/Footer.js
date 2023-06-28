import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import {FaHome} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-flex">
            <div className="footer-about">
              <h3 className="footer-about-heading">About Company</h3>
              <p className="footer-about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quo sint reiciendis atque in accusamus quasi adipisci
                hic distinctio recusandae.
              </p>
            </div>
            <div className="footer-connect">
              <h3 className="keep-connected-heading">Keep Connected</h3>
              <div className="social-media-icon">
                <BsFacebook className="footer-icon" />
                <p className="social-media-text">Like us on Facebook</p>
              </div>
              <div className="social-media-icon">
                <BsInstagram className="footer-icon" />
                <p className="social-media-text">Follow us on Instagram</p>
              </div>
              <div className="social-media-icon">
                <BsTwitter className="footer-icon" />
                <p className="social-media-text">Follow us on Twitter</p>
              </div>
              <div className="social-media-icon">
                <BsLinkedin className="footer-icon" />
                <p className="social-media-text">Follow us on Linkedin</p>
              </div>
            </div>
            <div className="footer-contact">
              <h3 className="footer-contact-heading">Contact Us</h3>
              <div className="contact-icon">
                <FaHome className="footer-icon" />
                <p className="contact-text">Like us on Facebook</p>
              </div>
              <div className="contact-icon">
                <AiFillMail className="footer-icon" />
                <p className="contact-text">Like us on Facebook</p>
              </div>
              <div className="contact-icon">
                <BsFillTelephoneFill className="footer-icon" />
                <p className="contact-text">Like us on Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
