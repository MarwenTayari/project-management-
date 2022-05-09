import React from 'react'
import './Task.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const Task = props => {
  const {onDelete = () => {}} = props
  return (
    <div className="container">
      <div className="header">
        <div className="user"></div>
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
        <b>Title:</b>
        <p>Description : </p>
        <p>Task creator: </p>
        <p>Assigned to :</p>
        <p>Status : </p>
        <p>Creation date : </p>
        <p>Completion date : </p>
      </div>
    </div>
  )
}

export default Task
