import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import me from './images/me.png'
import { Link } from 'react-router-dom';
import { RiOpenSourceFill } from "react-icons/ri";
const Homepage = () => {
    AOS.init()
  return (
    <div className='App'>
      <div className='navBar'>
        <ol>
          <li><Link to="/" >Profile</Link></li>
          <li><Link to="/experience" >Experience</Link></li>
          <li><Link to="/education" >Education</Link></li>
          <li><Link to="/projects" >Projects</Link></li>
          <li><Link to="/contact" >contact</Link></li>
        </ol>
      </div>
      <div className='sidetext'  data-aos="fade-left">
          <p><RiOpenSourceFill />Be Open-Source</p>
        </div>

        <div className='profile' data-aos="fade-up"  data-aos-duration="1000">
        <img src={me} alt="images"/>
        </div>
        <div className='name' data-aos="fade-up" data-aos-duration="1000">
        <h2>Jayaprakash R</h2>
        </div>
        <div className='designation' data-aos="fade-up" data-aos-duration="1500">
          <h4>MERN stack Developer</h4>
        </div>
        <div className='pro' data-aos="fade-up" data-aos-duration="2000">
          <p>Enthusiastic MERN stack developer with a strong foundation in modern web technologies and frameworks. Adept at building scalable, high-performance web applications using JavaScript, Node.js, Express, React, and MongoDB. Passionate about clean, efficient coding and eager to apply innovative solutions to complex challenges. Demonstrates excellent problem-solving skills, a keen eye for detail, and a proactive approach to learning. Committed to continuous professional growth and ready to contribute to dynamic development teams to deliver impactful projects.</p>
          <hr></hr>
        </div>
    </div>
  )
}

export default Homepage
