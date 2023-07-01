import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Footer from "./Footer";
import About from "./About";
import { Link } from "react-router-dom";
import LoginBg from "./LoginBg";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <div class="animate__animated animate__slideInLeft">
            <h1 className="primary-heading">
              "Cooking is like love. It should be entered into with abandon or
              not at all."- Harriet Van Horne
            </h1>
          </div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="secondary-button">
              Login
              <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img
            src={BannerImage}
            alt=""
            class="animate__animated animate__zoomIn"
          />
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
