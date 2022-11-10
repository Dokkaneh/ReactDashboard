import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@material-ui/data-grid';

import { userColumns, userRows } from "../../datatablerows"
import { Link } from 'react-router-dom';
const Datatable = () => {
    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
              <div className="cellAction">
                <Link to="/users/test" style={{textDecoration:"none"}}>
                  <button className="viewButton">view</button>
                </Link>
                  <button className="deleteButton">Delete</button>
                </div>
            )
        }
    }]
  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add new records
      </div>
      <Link to="/users/new" className='link'>
      Add New
      </Link>
      <DataGrid
        className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
                  pageSize={9}
                  rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default Datatable