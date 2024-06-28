import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { Link } from 'react-router-dom';
const Education = () => {
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
      <div className='education' data-aos="fade-up"  data-aos-duration="1500">
        <h2>Education</h2>
        <h3>Bachelor of Computer Application</h3>
        <h5>Jaya college of Arts and Science, Thiruninravur</h5>
        <p>2021 - 2024</p>
        <hr></hr>
        <h3>Higher Secondary Education </h3>
        <h5>DRBCCC Higher secondary School, Perambur</h5>
        <p>2019 - 2021</p>
        <hr></hr>
        <h3>Secondary Education</h3>
        <p>St. Joseph Matriculation School, Redhills </p>
        <hr></hr>
      </div>
    </div>
  )
}

export default Education
