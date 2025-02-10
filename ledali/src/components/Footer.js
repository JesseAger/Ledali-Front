// src/components/Footer.js
import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* <p>&copy; {new Date().getFullYear()} Ledali Drilling Ltd. All rights reserved.</p>
      <p>Email: ledalidrilling@gmail.com | Phone: +254-XXX-XXX-XXX</p> */}
      
<div className='foot-content'>

<div className='ledali'>
  <h3 className='ledali-head'>Ledali Drilling (E.A) Ltd</h3>
  <p className='foot-state'>
  At Ledali Drilling (E.A) LTD, we're on a mission to make a positive impact in Kenya through
   our cost-effective borehole drilling services.We believe that life flows from 
   the depths below, and our commitment is to bring this hidden treasure to the 
   surface, offering a sustainable water source that nourishes life in its purest form.
  </p>
  
  <div className='help-div'>
    <h4 className='help-box'>
      Need Help? <br/> Call 0727 111 133 | 0725 882 092
    </h4>
  </div>
</div>
<div className='quick-links'>
  <h3 className='quick-header'>Quick Links</h3>
        <nav>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About the company</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/projects">Our Projects Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> 
        <div className='email-div'>
          <Link to="" className='footer-email'>Email Us on ledalidrilling@gmail.com</Link>
        </div>
</div>
<div className='newsletter'>
  <h3>Newsletter</h3>
  <input type='text' placeholder='Email' className='foot-input'/>
  <button type='submit' className="foot-but">Subscribe</button>
  <p className='news-form'> Get updates on new deals, promotions, useful information, 
    industy trends and expert advice, delivered directly to your inbox.</p>

    <div className='location-div'>
      <Link to="" className='foot-location'><img src='#'/>Location</Link>
    </div>
</div>
<hr/>
</div>
    </footer>
  );
}

export default Footer;
