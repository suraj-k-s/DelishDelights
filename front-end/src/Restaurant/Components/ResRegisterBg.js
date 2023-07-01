import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import Register from "./ResRegister";

const RegisterBg = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img
          src={AboutBackgroundImage}
          alt=""
          class="animate__animated animate__slideInLeft"
        />
      </div>
      <div className="about-section-text-container">
        <div>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterBg;
