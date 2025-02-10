// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="about">
              <div className='about-cover'>
                  <div className='about-1'>
                    <h1 className='about-head'>About Us</h1>
                    <p className='about-state'>Ledali Drilling (E.A) LTD is a limited liability company incorporated in the republic of Kenya on #######,
                      in pursuant to and in accordance with the provisions of registration of business names acts and rules of Kenya.
                      We are dully registered by the ministry of water and sanitation and National Construction Authority as a qualified
                      water contractor for borehole drilling, equiping and servicing.Registration no #######.
                      We are built on quality work, attention to details, on time completion,
                      strong working patnerships and recruitment of top level staff.
                      Due to this guiding pillars, we have developed an impressive reputation for
                      delivering high quality projects. We strive to be a better company that prides
                      in its employees by offering growth and perfomance driven incentives</p>
                      <Link to="/contact" className = 'contact-about'>Contact Us</Link>
                  </div>

                  <div className='about-image'>
                      <img src='./assets/images/slides/image1.jpg' alt='about-img'/>
                  </div>
            </div>

        <div className='unlock'>
              <div className='unlock-state'>
                  <p className='unlock-p'><b>Unlocking Depths</b> <br/>We initiate the process with a hydrological survey. 
                    Following that, we seek approval from the water resources authority. 
                    Subsequently, we proceed to drill an open borehole, install casing, 
                    and create a gravel pad. The next steps involve the development of borehole parking,
                    conducting test pumping, analyzing water quality, and preparing a borehole
                    completion report. Finally, we install the water pump to complete the project.</p> <br/> <br/> <br/>
                    <Link to="/services" className='service-link'>Services</Link>
              </div>

              <div className='step-div'>
                  <div className='step'>
                    <h4 className='step-head'>01 Assessment</h4>
                    <p>We utilize advanced techniques to identify the most suitable areas
                      for borehole installation.</p>
                  </div>

                  <div className='step'>
                  <h4 className='step-head'>02 Planning</h4>
                  <p>We develop drilling plans, considering factors such as 
                    geological conditions, and environmental impact.</p>
                  </div>

                  <div className='step'>
                  <h4 className='step-head'>03 Excecution</h4>
                  <p>Our skilled professionals, use state-of-the-art equipment, 
                    ensure a smooth and successful drilling process..</p>
                  </div>
              </div>

        </div>

    <div className='team'>
          <div className='team-img'>
              <img src='./assets/images/slides/image1.jpg'/>
          </div>

          <div className='mission-state'>
              <div className='meet'>
                <h3>Meet Our Team</h3>
                <p> Our dedicated team at Ledali Drilling (E.A) LTD comprises skilled professionals passionate about water solutions. With expertise in geology, engineering, and environmental sustainability, 
                  we collaborate to deliver exceptional services and exceed client expectations.</p>
              </div>

              <div className='mission'>
                <h3>Our Mission</h3>
                <p>Our dedicated mission at Ledali Drilling (E.A) LTD is to provide clean water to our 
                communities in the most efficient and cost effective drilling practices</p>
              </div>

              <div className='business'>
                <h3>Our Main Business</h3>
                <p>Our main business is borehole drilling. We have exelled inthis area as can be atteste recommendations from our clients. We major in borehole drilling, pump intallations, 
                  borehole maintainance, borehole rehabilitation, and solar solutions</p>
              </div>
          </div>
    </div>

    <div className='values'>
        <div className='value-1'>
            <h3>Quality</h3>
            <p>We are committed to delivering high-quality services 
            and ensuring the purity of water sourced through our drilling.</p> 

            <h3>Community</h3>
            <p>We value community engagement and 
              strive to make a positive impact on the regions we serve.</p>

        </div>

        <div className='value-2'>
          <h3>Innovation</h3>
          <p>We continuously innovate our 
            drilling techniques and technologies to provide cutting-edge solutions</p> 
          
          <h3>Sustainability</h3>
          <p>Environmental sustainability is at the core
            of our operations, ensuring a greener tomorrow for all.</p>

        </div>

    </div>
        <div className='choice'>
          <h3 className='choice-h'>Why Choose Us?</h3>
          <p>Ledali Drilling (E.A) LTD stands out as the industry leader due to our
             unwavering commitment to excellence, customer satisfaction, 
             and environmental responsibility. We combine expertise, innovation,
              and dedication to deliver unparalleled water solutions. </p>
        </div>
        <Footer />
    </div>
  );
}

export default About;
