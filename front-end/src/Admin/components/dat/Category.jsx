import React, { Component } from "react";
import axios from "axios";
import "./category.css";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categoryData: [],
      columns: [
        {
          field: "category_id",
          headerName: "ID",
          width: 130,
        },
        {
          field: "category_name",
          headerName: "Category",
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
                  onClick={() => this.categoryDelete(params.row.category_id)}
                />
              </>
            );
          },
        },
      ],
    };
  }

  categoryDelete = (id) => {
    axios.delete(`http://localhost:4000/Category/${id}`).then((response) => {
      this.componentDidMount();
    });
  };

  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();

    var dat = {
      category_name: this.state.category,
    };

    axios.post("http://localhost:4000/Category", dat).then((response) => {
      this.cancelCourse();
      this.componentDidMount();
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/Category")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ categoryData: data.Category });
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
            <h1 className="categoryTitle">New Category</h1>
            <form className="categoryForm" id="categoryForm">
              <div className="categoryItem">
                <label>Category</label>
                <input
                  type="text"
                  onChange={this.inputSet}
                  placeholder="category"
                  name="category"
                />
              </div>
              <button onClick={this.saveData} className="categoryButton">
                Save
              </button>
            </form>
            <div className="categoryList">
              <DataGrid
                getRowId={(row) => row.category_id}
                rows={this.state.categoryData}
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
