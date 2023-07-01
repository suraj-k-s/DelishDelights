import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import FsLightbox from "fslightbox-react";
import "react-awesome-lightbox/build/style.css";
import Modal from "@mui/material/Modal";
import { teal } from "@mui/material/colors";

const RecipeView = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [content, setContent] = useState([]);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setRejected(true);
  };

  const fetchData = () => {
    axios.get("http://localhost:4000/Recipe").then((response) => {
      var data = response.data.Recipe;
      console.log(data);
      setContent(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //For Modal

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //for fslightbox image
  const [photoUrl, setPhotoUrl] = useState();
  const [toggler, setToggler] = useState(false);

  //for fslightbox video
  const [videoUrl, setVideoUrl] = useState();
  const [vtoggler, setVtoggler] = useState(false);

  return (
    <div className="Ahome">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Container maxWidth="sm">
          {content.map((c, key) => {
            return (
              <Paper
                sx={{ p: 4 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "700px",
                  marginLeft: "0px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 4 }}
                  key={key}
                  value={c.recipe_id}
                >
                  {c.recipe_title}
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Typography>{c.recipe_details}</Typography>
                </Box>
                <Button
                  style={{
                    width: "100px",
                    marginLeft: "10px",
                    backgroundColor: "teal",
                    color: "white",
                  }}
                  sx={{ boxShadow: 2 }}
                  onClick={() => {
                    setToggler(!toggler);
                    setPhotoUrl(c.recipe_photo);
                  }}
                >
                  Photo
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    ></Box>
                    <Button
                      style={{
                        width: "100px",
                        marginLeft: "10px",
                        backgroundColor: "teal",
                        color: "white",
                      }}
                      sx={{ boxShadow: 2 }}
                      onClick={() => {
                        setVtoggler(!vtoggler);
                        setVideoUrl(c.recipe_video);
                      }}
                    >
                      Video
                    </Button>
                  </Box>
                  <Box>
                    {!accepted && !rejected && (
                      <>
                        <Button
                          variant="contained"
                          sx={{ mr: 2 }}
                          onClick={handleAccept}
                          onChange
                        >
                          <CheckIcon sx={{ mr: 1 }} />
                          Accept
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={handleReject}
                          sx={{ boxShadow: 2 }}
                        >
                          <CloseIcon sx={{ mr: 1 }} />
                          Reject
                        </Button>
                      </>
                    )}
                    {accepted && (
                      <Typography variant="h6" sx={{ color: "success.main" }}>
                        <CheckIcon sx={{ mr: 1 }} />
                        Accepted
                      </Typography>
                    )}
                    {rejected && (
                      <Typography variant="h6" sx={{ color: "error.main" }}>
                        <CloseIcon sx={{ mr: 1 }} />
                        Rejected
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Container>
        <FsLightbox toggler={toggler} sources={[photoUrl]} />
        <FsLightbox toggler={vtoggler} sources={[videoUrl]} />
      </div>
    </div>
  );
};

export default RecipeView;
