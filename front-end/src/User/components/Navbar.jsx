import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {

  const [user, setUser] = useState([]);

  const fetchUser = () => {
    axios.get("http://localhost:4000/User/" + sessionStorage.getItem("user_id")).then((response) => {
      var data = response.data.User;
      setUser(data[0]);
    });
  }

  const logout = () => {
    axios.delete("http://localhost:4000/logout").then(() => {
      sessionStorage.removeItem("user_id");
      window.location = "/login";
    });
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/User">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/User/">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/User/Recipie">
            <h6>RECIPES</h6>
          </Link>
          <Link className="link" to="/User/">
            <h6>RESTAURANT</h6>
          </Link>
          <span className="write">
            <Link className="link" to="/User/write">
              Write
            </Link>
          </span>
          <Link className="link" to="/User/profile">
            <Avatar style={{ width: "48px", height: "48px" }} alt="Remy Sharp" src={user.user_photo} ></Avatar>
          </Link>
          <Link onClick={logout} className="link" to="/User/profile">
            <h6 style={{ color: "red" }}>LOG OUT</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
