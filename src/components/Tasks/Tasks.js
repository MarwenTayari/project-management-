import React, {useState} from 'react'
import Task from './Task'
import './Tasks.css'
import Button from '@mui/material/Button'

const Tasks = () => {
  const [listOfTasks, setListOfTasks] = useState([{}, {}, {}, {}, {}, {}])

  const addNewTask = _newTask => setListOfTasks([...listOfTasks, _newTask])
  const deleteTask = index => {
    let _listOfTasks = listOfTasks
    _listOfTasks?.splice(index, 1)
    setListOfTasks(_listOfTasks)
  }
  return (
    <div className="tasks">
      <Button
        className="add-task-btn"
        variant="contained"
        color="primary"
        onClick={() => addNewTask({})}
      >
        Add new task +
      </Button>
      <div className="tasks-content">
        {listOfTasks?.map((task, index) => (
          <Task {...task} onDelete={() => deleteTask(index)} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Tasks
