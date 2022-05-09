import React, {useState} from 'react'
import './LeftBar.css'
import Project from './Project'
import Button from '@mui/material/Button'

const LeftBar = () => {
  const [listOfProject, setListOfProject] = useState([{}, {}, {}, {}, {}, {}])

  const addNewProject = _newProject =>
    setListOfProject([...listOfProject, _newProject])
  const deleteProject = index => {
    let _listOfProject = listOfProject
    _listOfProject?.splice(index, 1)
    setListOfProject(_listOfProject)
  }
  return (
    <div className="LeftBar">
      <div>
        <Button variant="contained" onClick={() => addNewProject({})}>
          Add New Project +{' '}
        </Button>
      </div>
      <h4> List of projects : </h4>
      {listOfProject?.map((project, index) => (
        <Project
          {...project}
          onDelete={() => deleteProject(index)}
          key={index}
        />
      ))}
    </div>
  )
}
export default LeftBar
