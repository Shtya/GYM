import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import logo from "../../assets/logo.png";
const Footer = () => {
  
  return (
    <div className="Footer" id="Footer">
      <span className="Tp"></span>
      <div className="end">
        <div className="blur" style={{left:"50%"}}></div>
        <ul>
          <Link to="">
            <i className="fa-brands fa-square-github"></i>
          </Link>
          <Link to="">
            <i className="fa-solid fa-laptop"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </ul>
        <div className="cover"><img src={logo} alt="" /></div>
      </div>
    </div>
  );
};

export default Footer;
