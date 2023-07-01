import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { Link } from "@mui/material";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Food is not just a source of sustenance, it's an expression of
          culture, identity, and creativity. From the spicy curries of India to
          the hearty stews of Ireland.
        </p>
        <p className="primary-text">
          Every dish tells a story and evokes a sense of place. Whether it's a
          simple meal with family or a gourmet feast, food has the power to
          bring people together and create unforgettable experiences.
        </p>
        <div className="about-buttons-container">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <button className="secondary-button">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
