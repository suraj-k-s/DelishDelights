import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import Login from "./Login";
import "animate.css";

const LoginBg = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img
          class="animate__animated animate__slideInLeft"
          src={AboutBackgroundImage}
          alt=""
        />
      </div>
      <div className="about-section-text-container">
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginBg;
