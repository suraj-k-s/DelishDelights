import React, { useLayoutEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  FormControl,
  Grid,
  InputLabel,
  Paper,
  MenuItem,
  Select,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Snackbar from "@mui/material/Snackbar";
import { MuiOtpInput } from "mui-one-time-password-input";

const ResRegister = () => {
  const paperStyle = {
    padding: 20,
    height: "70hv",
    width: 451,
    margin: "20px auto",
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
    padding: "23px",
  };

  const [rname, setRname] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState([]);
  const [place, setPlace] = useState([]);
  const [plc, setPlc] = useState("");
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [check, setCheck] = useState(null);
  const [remainingTime, setRemainingTime] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const navigate = useNavigate();


  useLayoutEffect(() => {
    let intervalId;
    if (isTimerRunning && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerRunning, remainingTime]);

  function startTimer() {
    setIsTimerRunning(true);
    setRemainingTime(10);
    setTimeout(() => {
      setIsTimerRunning(false);
    }, 10000);
  }

  const ajaxplace = (pla) => {
    console.log(pla);
    axios.get(`http://localhost:4000/ajaxplace/${pla}`).then((response) => {
      var data = response.data.place;
      setPlace(data);
    });
  };

  const RegisterData = (e) => {
    const OTP = generateOTP();
    console.log(OTP);
    sessionStorage.setItem("Votp", OTP);
    sessionStorage.setItem("Remail", email);
    const formData = new FormData();
    formData.append("rname", rname);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("photo", photo);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("plc", plc);
    formData.append("otp", OTP);

    axios
      .post("http://localhost:4000/Restaurant", formData)
      .then((response) => {
        sessionStorage.setItem("v_id", response.data.r_id[0].id);

        // handleClick({
        //   vertical: "top",
        //   horizontal: "right",
        // });
        handleOpen();
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

    //toast state
    // setState({ ...state, open: false });
  };

  // toast

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, topen } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  //OTP Generator

  function generateOTP() {
    let length = 6;
    let otp = "";
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  }

  const fetchDisData = () => {
    axios.get("http://localhost:4000/District").then((response) => {
      var data = response.data.district;
      setDistrict(data);
    });
  };

  useEffect(() => {
    fetchDisData();
  }, []);

  const handleChange = (newValue) => {
    setOtp(newValue);
    if (newValue.length == 6) {
      if (sessionStorage.getItem("Votp") == newValue) {
        axios
          .post(
            "http://localhost:4000/ResregVerfication/" +
            sessionStorage.getItem("v_id")
          )
          .then((response) => {
            alert("Success");
            navigate("/Login/")

            handleClose();
          });
      } else {
        handleOpen();
        setCheck("Incorrect OTP");
      }
    } else {
    }
  };

  //OTP Resend

  const Resend = () => {
    startTimer();
    const OTP = generateOTP();
    sessionStorage.setItem("Votp", OTP);
    console.log(OTP);
    console.log(sessionStorage.getItem("Votp"));
    console.log(sessionStorage.getItem("Remail"));
    const dat = {
      email: sessionStorage.getItem("Remail"),
      otp: OTP,
    };
    axios.post("http://localhost:4000/Resend", dat).then((response) => { });
  };

  //timer

  return (
    <div class="animate__animated animate__slideInRight">
      <Paper elevation={10} style={paperStyle}>
        <h1>Restaurant Registration</h1>
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item xm={12} sm={6}>
            <TextField
              id="standard-basic"
              label="Restaurant Name"
              variant="standard"
              type="text"
              onChange={(e) => setRname(e.target.value)}
            />
          </Grid>
          <Grid item xm={12} sm={6}>
            <FormControl variant="standard" sx={{ minWidth: 195 }}>
              <InputLabel id="demo-simple-select-standard-label">
                District
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(d) => ajaxplace(d.target.value)}
                label="Place"
                x={{ gridColumn: "span 4" }}
              >
                <MenuItem disabled value="">
                  <em>Select District</em>
                </MenuItem>
                {district.map((d, key) => {
                  return (
                    <MenuItem key={key} value={d.district_id}>
                      {d.district_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xm={12} sm={6}>
            <FormControl variant="standard" sx={{ minWidth: 195 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Place
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(d) => setPlc(d.target.value)}
                label="District"
                x={{ gridColumn: "span 4" }}
              >
                <MenuItem disabled value="">
                  <em>Select Place</em>
                </MenuItem>
                {place.map((d, key) => {
                  return (
                    <MenuItem key={key} value={d.place_id}>
                      {d.place_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xm={12} sm={6}>
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              type="text  "
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xm={12} sm={6}>
            <TextField
              id="standard-basic"
              label="Contact"
              variant="standard"
              type="text  "
              onChange={(e) => setContact(e.target.value)}
            />
          </Grid>
          <Grid item xm={12} sm={6}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="contained"
                component="label"
                style={{ backgroundColor: "teal", width: "72%" }}
              >
                {photo ? photo.name : "UPLOAD"}
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Button>
            </label>
          </Grid>
          <Grid item xm={12} sm={6}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xm={12} sm={6}>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xm={12} sm={6}></Grid>
        </Grid>{" "}
        <Stack style={{
          display: "flex",
          justifyContent: "flex-end"
        }} spacing={2} direction="row">
          <div >
            <Button
              variant="contained"
              style={{ backgroundColor: "teal", marginTop: "10px", marginBottom: "10px" }}
              onClick={() => {
                RegisterData();
                startTimer();
              }}
              disabled={isTimerRunning}
              sx={{ alignItems: "center" }}
            >
              Submit
            </Button>
          </div>
        </Stack>
        <span style={{
          display: "flex",
          justifyContent: "flex-end"
        }}>
          Do you have an account?
          <Link to="/login" className="Reg">
            Login
          </Link>
        </span>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ marginBottom: "20px" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Verify OTP
            </Typography>
          </div>
          <MuiOtpInput length={6} value={otp} onChange={handleChange} />

          <div style={{ marginTop: "10px", marginTop: "10px" }}>{check}</div>
          <div>
            <Button
              disabled={isTimerRunning}
              style={{ marginLeft: "242px", marginTop: "10px" }}
              onClick={() => Resend()}
            >
              {isTimerRunning ? ` ${remainingTime}s` : "Resend OTP"}
            </Button>
            {/* <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="Verfication Code sent! Please check your email!"
            key={vertical + horizontal}
          /> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ResRegister;
