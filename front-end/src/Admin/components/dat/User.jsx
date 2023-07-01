import React, { Component } from "react";
import axios from "axios";
import "./category.css";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

//Modal Style

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

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      open: false,
      user: "",
      userData: [],
      columns: [
        {
          field: "user_id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "user_name",
          headerName: "Name",
          width: 260,
        },
        {
          field: "user_contact",
          headerName: "Contact",
          width: 260,
        },
        {
          field: "user_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "action",
          headerName: "Photo",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <InsertPhotoIcon
                  className="categoryListDelete"
                  onClick={() => this.handleOpen(params.row.user_photo)}
                />
              </>
            );
          },
        },
      ],
    };
  }
  handleOpen = (e) => {
    this.setState({ open: true, image: e });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      user_name: this.state.user,
    };

    axios.post("http://localhost:4000/User", dat).then((response) => {
      this.cancelCourse();
      this.componentDidMount();
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/User")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ userData: data.User });
      });
  }

  cancelCourse = () => {
    document.getElementById("categoryForm").reset();
  };

  render() {
    return (
      <div className="Ahome">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="category">
            <h1 className="categoryTitle">User List</h1>
            <div className="categoryList">
              <DataGrid
                getRowId={(row) => row.user_id}
                rows={this.state.userData}
                columns={this.state.columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </div>
        </div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img width="100%" src={this.state.image} alt={this.state.image} />
          </Box>
        </Modal>
      </div>
    );
  }
}
