import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@material-ui/data-grid';

import { userColumns, userRows } from "../../datatablerows"
const Datatable = () => {
    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="cellAction">
                    <button className="viewButton">view</button>
                    <button className="deleteButton">Delete</button>
                </div>
            )
        }
    }]
  return (
      <div className='datatable'>
                 <DataGrid
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