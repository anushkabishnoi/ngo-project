import React from 'react'
import {  FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section className="section-white">
      <div className="container">
        <div className="img">
          <img src="./Images/pragya.jpeg" alt="" />
        </div>
        <div className="caption">
          <h3>Anushka Bishnoi</h3>
          <p>Full Stack Developer</p>
          <p>Learning Cyber Security</p>
          <div className="social-links">
            <div className="socialIcons">
            <a
            href="https://github.com/anushkabishnoi"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <span className="icon">
              <FaGithub />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/pragya-shah-abb843221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>

          <a
            href="https://twitter.com/PRAGYASHAH09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="caption">
          <h3>Pragya Shah</h3>
          <p>Full Stack Developer</p>
          <p>DevOps Developer</p>
          <div className="social-links">
            <div className="socialIcons">
            <a
            href="https://github.com/Pragyashah09"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <span className="icon">
              <FaGithub />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/pragya-shah-abb843221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>

          <a
            href="https://twitter.com/PRAGYASHAH09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          </div>
        </div>
        </div>


        </div>
        </div>
    </section>
  )
}

export default OurTeam
