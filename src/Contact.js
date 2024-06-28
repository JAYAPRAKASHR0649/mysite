import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { FaReddit } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Contact = () => {
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
        <div className='contact' data-aos="fade-up">
            <a href='https://www.linkedin.com/in/jayaprakash-r-194054282/' target='_blank'><FaLinkedin />  LinkedIn</a>
            <br></br>
            <a href='mailto:mailtojayaprakashteek@gmail.com' target='_blank' ><BiLogoGmail /> Gmail</a>
            <br></br>
            <a href='tel:9940118936' target='_blank'><IoCallSharp />  To  Call</a>
            <br></br>
            <a href='https://www.reddit.com/user/Heisenberg_0649/' target='_blank'><FaReddit /> Reddit</a>
        </div>
      </div>

    </div>
  )
}

export default Contact
