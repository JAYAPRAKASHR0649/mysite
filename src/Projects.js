import React from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './project.css'
const Projects = () => {
  AOS.init()
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
        <>
        <div className='project 1'  >
          <div className='links' data-aos="fade-left">
            <a href='https://github.com/JAYAPRAKASHR0649/smallCommerceSite'>Amazon Look-alike E-commerce site</a>
          </div>
          <div className='links' data-aos="fade-left" data-aos-duration="1000" >
            <a href='https://github.com/JAYAPRAKASHR0649/game'>Number Guessing Game</a>
          </div>
        </div>
        </>
      </div>
      <div></div>
    </div>
  )
}

export default Projects
