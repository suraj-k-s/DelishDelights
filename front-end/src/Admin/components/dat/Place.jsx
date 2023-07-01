// import React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import {
//   FormControl,
//   Grid,
//   IconButton,
//   InputLabel,
//   Paper,
//   MenuItem,
//   Select,
// } from "@mui/material";
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

// const Place = () => {
//   var sl = 1;
//   const paperStyle = {
//     padding: 20,
//     height: "70hv",
//     width: 280,
//     margin: "20px auto",
//   };
//   const [place, setPlace] = useState("");
//   const [rows, setRows] = useState([]);
//   const [dis, setDis] = useState([]);
//   const [dist, setDist] = useState([]);

//   const inputData = (e) => {
//     var dat = {
//       place_name: place,
//       district_id: dis,
//     };
//     axios.post("http://localhost:4000/Place", dat).then((response) => {
//       console.log(response.data);
//       alert(response.data.message);
//       fetchData();
//     });
//   };

//   const deleteData = (f) => {
//     axios.delete(`http://localhost:4000/Place/${f}`).then((response) => {
//       console.log(response.data);
//       alert(response.data.message);
//       fetchData();
//     });
//   };

//   const fetchData = () => {
//     axios.get("http://localhost:4000/Place").then((response) => {
//       var data = response.data.place;
//       setRows(data);
//     });
//   };

//   const fetchDisData = () => {
//     axios.get("http://localhost:4000/District").then((response) => {
//       var data = response.data.district;
//       setDist(data);
//     });
//   };
//   useEffect(() => {
//     fetchData();
//     fetchDisData();
//   }, []);

//   return (
//     <div className="Ahome">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <Grid align="center">
//           <Paper elevation={10} style={paperStyle}>
//             Place
//             <Box
//               display="flex"
//               flexDirection="column"
//               justifyContent="center"
//               alignItems="center"
//               minHeight="0vh"
//               component="form"
//               sx={{
//                 "& > :not(style)": { m: 1, width: "25ch" },
//               }}
//               noValidate
//               autoComplete="off"
//             >
//               <TextField
//                 id="standard-basic"
//                 label="Place"
//                 variant="standard"
//                 onChange={(e) => setPlace(e.target.value)}
//               />

//               <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                 <InputLabel id="demo-simple-select-standard-label"></InputLabel>
//                 <Select
//                   labelId="demo-simple-select-standard-label"
//                   id="demo-simple-select-standard"
//                   onChange={(d) => setDis(d.target.value)}
//                   label="District"
//                   variant="standard"
//                   x={{ gridColumn: "span 4" }}
//                 >
//                   <MenuItem disabled value="">
//                     <em>Select District</em>
//                   </MenuItem>
//                   {dist.map((d, key) => {
//                     return (
//                       <MenuItem key={key} value={d.district_id}>
//                         {d.district_name}
//                       </MenuItem>
//                     );
//                   })}
//                 </Select>
//               </FormControl>

//               <Stack spacing={2} direction="row">
//                 <Button
//                   variant="contained"
//                   style={{ backgroundColor: "teal" }}
//                   onClick={() => inputData()}
//                 >
//                   Submit
//                 </Button>
//               </Stack>
//             </Box>
//           </Paper>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="right">Sl no.</TableCell>
//                   <TableCell align="right">Place</TableCell>
//                   <TableCell align="right">District</TableCell>
//                   <TableCell align="right">Action</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((e, key) => (
//                   <TableRow
//                     key={key}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell component="th" scope="row" align="right">
//                       {sl++}
//                     </TableCell>
//                     <TableCell align="right">{e.place_name}</TableCell>
//                     <TableCell align="right">{e.district_name}</TableCell>
//                     <TableCell align="right">
//                       <IconButton
//                         aria-label="delete"
//                         onClick={() => deleteData(e.place_id)}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Place;

import React, { Component } from "react";
import "./category.css";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

export default class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtData: [],
      placeData: [],
      districtId: "",
      placeName: "",
      columns: [
        {
          field: "id",
          headerName: "number",
          filterable: false,
          renderCell: (index) => index.api.getRowIndex(index.row.district_id),
        },
        {
          field: "district_name",
          headerName: "District",
          width: 260,
        },
        {
          field: "place_name",
          headerName: "place",
          width: 260,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="categoryListDelete"
                  onClick={() => this.districtDelete(params.row.district_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }
  districtDelete = (id) => {
    axios.post(`http://localhost:4000/Place/${id}`).then((response) => {
      if (response.data === "Success") {
        this.componentDidMount();
      } else {
        alert("Failed");
      }
    });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      district_id: this.state.districtId,
      place_name: this.state.placeName,
    };

    axios.post("http://localhost:4000/Place", dat).then((response) => {
      if (response.data === "Success") {
        this.componentDidMount();
      } else {
        alert("Failed");
      }
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/District")
      .then((response) => response.data.district)
      .then((data) => {
        this.setState({ districtData: data });
      });

    axios
      .get("http://localhost:4000/Place")
      .then((response) => response.data.place)
      .then((data) => {
        this.setState({ placeData: data });
      });
  }

  render() {
    return (
      <div className="Ahome">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="category">
            <h1 className="categoryTitle"> Add New Place</h1>
            <form className="categoryForm">
              <div className="categoryItem">
                <label> District</label>
                <select
                  name="districtId"
                  id="districtId"
                  onChange={this.inputSet}
                  style={{ height: "42px", borderRadius: "5px" }}
                >
                  <option value="">-----Select District------</option>
                  {this.state.districtData.map((d, key) => {
                    return (
                      <option key={key} value={d.district_id}>
                        {d.district_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="categoryItem">
                <label> Place</label>
                <input type="text" name="placeName" onChange={this.inputSet} />
              </div>
              <button className="categoryButton" onClick={this.saveData}>
                Save
              </button>
            </form>
            <div className="categoryList">
              <DataGrid
                getRowId={(row) => row.district_id}
                rows={this.state.placeData}
                columns={this.state.columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
            <div className="categoryList"></div>
          </div>
        </div>
      </div>
    );
  }
}
