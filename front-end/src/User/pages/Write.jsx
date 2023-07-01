import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Button, Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  const uploadBlog = (newState) => {
    const frm = new FormData()
    frm.append("user_id", sessionStorage.getItem("user_id"));
    frm.append("imgsrc", files);
    frm.append("blog_title", title);
    frm.append("blog_content", content);
    axios.post("http://localhost:4000/Blog", frm).then((response) => {
    })
    setState({ open: true, ...newState });
    setContent(null);
    setFiles(null);
    setTitle(null);

  }
  const handleClick = (e) => {
    const img = e.target.files[0];
    setFiles(img);
  }



  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={content}
            onChange={(value) => setContent(value)}
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button style={{ backgroundColor: "teal" }} variant="contained" component="label">
          {files ? files.name : "Upload"}
          <input onClick={handleClick} hidden accept="image/*" multiple type="file" onChange={(e) => setFiles(e.target.files[0])} />
        </Button> <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={() => {
          uploadBlog({
            vertical: 'top',
            horizontal: 'center',
          })

        }}>
          Post

        </Button>
        <Snackbar anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal} open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Post Uploaded!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Write;
