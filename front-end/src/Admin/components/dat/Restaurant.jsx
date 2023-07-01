// import React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { Grid, IconButton, Paper, Typography } from "@mui/material";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Navbar from "../navbar/Navbar";
// import Sidebar from "../sidebar/Sidebar";
// import Modal from "@mui/material/Modal";
// import ImageIcon from "@mui/icons-material/Image";

// const Restaurant = () => {
//   var sl = 1;
//   const [rows, setRows] = useState([]);

//   const deleteData = (f) => {
//     axios.delete(`http://localhost:4000/Restaurant/${f}`).then((response) => {
//       console.log(response.data);
//       alert(response.data.message);
//       fetchData();
//     });
//   };

//   const fetchData = () => {
//     axios.get("http://localhost:4000/Restaurant").then((response) => {
//       var data = response.data.Restaurant;
//       console.log(data);
//       setRows(data);
//     });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   //For modal

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div className="Ahome">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="right">Sl no.</TableCell>
//                 <TableCell align="right">Name</TableCell>
//                 <TableCell align="right">Address</TableCell>
//                 <TableCell align="right">Contact</TableCell>
//                 <TableCell align="right">Email</TableCell>
//                 <TableCell align="right">Photo</TableCell>
//                 <TableCell align="right">Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((e) => (
//                 <TableRow
//                   key={e.restaurant_name}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row" align="right">
//                     {sl++}
//                   </TableCell>
//                   <TableCell align="right">{e.restaurant_name}</TableCell>
//                   <TableCell align="right">{e.restaurant_address}</TableCell>
//                   <TableCell align="right">{e.restaurant_contact}</TableCell>
//                   <TableCell align="right">{e.restaurant_email}</TableCell>
//                   <TableCell align="right">
//                     <IconButton onClick={handleOpen}>
//                       <ImageIcon />
//                     </IconButton>
//                     <Modal
//                       open={open}
//                       onClose={handleClose}
//                       aria-labelledby="modal-modal-title"
//                       aria-describedby="modal-modal-description"
//                     >
//                       <Box sx={style}>
//                         <img
//                           width="100%"
//                           src={e.restaurant_photo}
//                           alt={e.restaurant_photo}
//                         />
//                       </Box>
//                     </Modal>
//                   </TableCell>

//                   <TableCell align="right">
//                     <IconButton
//                       aria-label="delete"
//                       onClick={() => deleteData(e.restaurant_id)}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default Restaurant;

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
import { DeleteOutline } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid } from "@mui/material";

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
      resId: "",
      image: "",
      open: false,
      openA: false,
      openR: false,
      accept: false,
      reject: false,
      restaurant: "",
      restaurantData: [],
      columns: [
        {
          field: "restaurant_id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "restaurant_name",
          headerName: "Name",
          width: 260,
        },
        {
          field: "restaurant_address",
          headerName: "Adderss",
          width: 260,
        },
        {
          field: "restaurant_contact",
          headerName: "Contact",
          width: 260,
        },
        {
          field: "restaurant_email",
          headerName: "Email",
          width: 260,
        },
        {
          field: "restaurant_photo",
          headerName: "Photo",
          width: 260,
          renderCell: (params) => {
            return (
              <>
                <InsertPhotoIcon
                  className="categoryListDelete"
                  onClick={() => this.handleOpen(params.row.restaurant_photo)}
                />
              </>
            );
          },
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DoneIcon
                  className="categoryListDelete"
                  onClick={() => this.handleOpenA(params.row.restaurant_id)}
                />

                <CloseIcon
                  className="categoryListDelete"
                  onClick={() => this.handleOpenR(params.row.restaurant_id)}
                />
              </>
            );
          },
        },
      ],
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  restaurantAccept = () => {
    var id = this.state.resId;

    axios.post(`http://localhost:4000/ResAccept/${id}`).then((response) => {
      this.componentDidMount();
      alert("Accepted");
    });
  };

  restaurantReject = () => {
    var id = this.state.resId;

    axios.post(`http://localhost:4000/ResReject/${id}`).then((response) => {
      this.componentDidMount();
      alert("Rejected");
    });
  };

  // image modal event

  handleOpen = (e) => {
    this.setState({ open: true, image: e });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // confrimation modal accept event

  handleOpenA = (e) => {
    this.setState({ openA: true, resId: e });
  };

  handleCloseA = () => {
    this.setState({ openA: false });
  };

  // confrimation modal reject event

  handleOpenR = (e) => {
    this.setState({ openR: true, resId: e });
  };

  handleCloseR = () => {
    this.setState({ openR: false });
  };

  // accept reject

  handleAccept = () => {
    this.restaurantAccept();
    this.handleCloseA();
  };

  handleReject = () => {
    this.handleCloseR();
    this.restaurantReject();
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      restaurant_name: this.state.restaurant,
    };

    axios.post("http://localhost:4000/Restaurant", dat).then((response) => {
      this.cancelCourse();
      this.componentDidMount();
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/Restaurant")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ restaurantData: data.Restaurant });
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
            <h1 className="categoryTitle">Restaurant List</h1>
            <div className="categoryList">
              <DataGrid
                getRowId={(row) => row.restaurant_id}
                rows={this.state.restaurantData}
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
          onClose={this.handleCloseA}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img width="100%" src={this.state.image} alt={this.state.image} />
          </Box>
        </Modal>

        <Modal
          open={this.state.openA}
          onClose={this.handleCloseA}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3>Confirm Accept</h3>
            <Button onClick={this.handleAccept}>Confirm</Button>
            <Button onClick={this.handleCloseA}>Cancel</Button>
          </Box>
        </Modal>

        <Modal
          open={this.state.openR}
          onClose={this.handleCloseR}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3>Confirm Reject</h3>
            <Button onClick={this.handleReject}>Confirm</Button>
            <Button onClick={this.handleCloseR}>Cancel</Button>
          </Box>
        </Modal>
      </div>
    );
  }
}
