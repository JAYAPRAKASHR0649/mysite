import React from 'react'
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div>
      <div className='navBar'>
        <ol>
          <li><Link to="/" >Profile</Link></li>
          <li><Link to="/experience" >Experience</Link></li>
          <li><Link to="/education" >Education</Link></li>
          <li><Link to="/projects" >Projects</Link></li>
          <li><Link to="/contact" >contact</Link></li>
        </ol>
      </div>
      <div></div>
    </div>
  )
}

export default Projects
