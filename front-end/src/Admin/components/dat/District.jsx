
import React, { Component } from "react";
import "./category.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      District: "",
      districtData: [],
      columns: [
        {
          field: "district_id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "district_name",
          headerName: "Name",
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
                  className="districtListDelete"
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
    axios.delete(`http://localhost:4000/District/${id}`).then((response) => {
      this.componentDidMount();
    });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      district_name: this.state.District,
    };
    console.log(dat);

    axios.post("http://localhost:4000/District", dat).then((response) => {
      this.cancelCourse();
      this.componentDidMount();
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/District")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ districtData: data.district });
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
            <h1 className="categoryTitle">New District</h1>
            <form className="categoryForm" id="categoryForm">
              <div className="categoryItem">
                <label>District</label>
                <input
                  type="text"
                  onChange={this.inputSet}
                  placeholder="District"
                  name="District"
                />
              </div>
              <button onClick={this.saveData} className="categoryButton">
                Save
              </button>
            </form>
            <div className="categoryList">
              <DataGrid
                getRowId={(row) => row.district_id}
                rows={this.state.districtData}
                columns={this.state.columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
