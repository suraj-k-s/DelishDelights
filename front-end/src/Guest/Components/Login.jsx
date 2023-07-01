import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Paper, Button } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70hv",
    width: 280,
    margin: "20px auto",
  };
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  const LoginData = (e) => {
    var dat = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:4000/login", dat).then((response) => {

      if (response.data.type === "admin") {
        sessionStorage.setItem("admin_id", response.data.id);
        navigate("/Admin/");
      } else if (response.data.type === "user") {
        sessionStorage.setItem("user_id", response.data.id);
        navigate("/User/");
      } else if (response.data.type === "restaurant") {
        sessionStorage.setItem("res_id", response.data.id);
        navigate("/Restaurant/");
      }
    });
  };

  return (
    <div class="animate__animated animate__slideInRight">
      <Paper elevation={10} style={paperStyle} sx={{ alignItems: "center" }}>
        <h1>Login</h1>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="0vh"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              style={{ backgroundColor: "teal" }}
              onClick={() => LoginData()}
              sx={{ alignItems: "center" }}
            >
              Submit
            </Button>
          </Stack>
          <span>
            Don't you have an account?{" "}
            <Link to="/register" className="Reg">
              Sign Up
            </Link>
          </span>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
