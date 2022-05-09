import React from 'react'
import './Project.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
const LeftBar = props => {
  const {onDelete = () => {}} = props
  return (
    <div className="container-project">
      <div className="header">
        <div className="options">
          <div className="edit">
            <EditIcon />
          </div>
          <div onClick={() => onDelete()} className="delete">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="content">
        <b>Title : </b>
        <p>description : </p>
        <p>Status : </p>
        <p>Users list : </p>
        <p>Creation date : </p>
      </div>
    </div>
  )
}
export default LeftBar
