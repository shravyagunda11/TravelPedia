import "./listTable.scss";

import { userColumns, userRows } from "../../data/dataresource";

import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";

import axios from "axios";

import Box from "@mui/material/Box";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Datatable = ({columns}) => {

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();

  const { data, loading, error } = useFetch(`http://localhost:8800/api/${path}`);

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/staff/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {handleDelete(params.row._id);window.location.reload()}}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


    return (
      <>
      <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>

      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        getRowId ={(row) => row._id} 
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
      </>
      
    );
  };
  
  export default Datatable;