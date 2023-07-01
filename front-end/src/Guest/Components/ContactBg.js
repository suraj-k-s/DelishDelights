import React from "react";
import AboutBackground from "../Assets/about-background.png";

const ContactBg = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form">
        <input type="text" placeholder="Ask Questions.." />
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
      </div>
      <button className="secondary-button b">Submit</button>
    </div>
  );
};

export default ContactBg;
