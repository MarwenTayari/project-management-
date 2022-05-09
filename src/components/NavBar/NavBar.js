import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="main">
      <div className="project-name-div">
        <span className="project-name">Project Management app</span>
      </div>
      <button className="logout"> LogOut</button>
    </div>
  )
}

export default NavBar
