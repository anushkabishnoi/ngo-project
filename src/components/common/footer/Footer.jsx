import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        we are dedicated to creating a dynamic platform that brings together education-focused non-governmental organizations (NGOs) in a harmonious ecosystem of shared goals and collective progress.
          Uniting NGOs, Amplifying Impact: Where Collaboration Ignites Change.
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/anushkabishnoi/ngo-project"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <span className="icon">
              <FaGithub />
            </span>
          </a>

          <a href="mailto:protsahan.education@gmail.com" target="_blank" rel="noopener noreferrer">
      <span className="icon">
        <FaEnvelope />
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
    </footer>
  );
};

export default Footer;
