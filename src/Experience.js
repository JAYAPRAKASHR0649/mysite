import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { Link } from 'react-router-dom';

const Experience = () => {
  AOS.init()
  return (
    <div>
         <div className='navBar'>
        <ol>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ol>
      </div>
      <div className='internship' data-aos="fade-up"  data-aos-duration="1500">
        <h2>INTERNSHIPS</h2>
        <h3 >Web developer intern</h3>
        <h5 >Octanet Services Pvt.Ltd</h5>
        <p>Jun 2024 - Jul 2024</p>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>Java Developer intern</h3>
        <h5>RPS Pvt.Ltd</h5>
        <p>Mar 2023 - Apr 2023</p>
        <hr></hr>
      </div>
    </div>
  )
}

export default Experience
