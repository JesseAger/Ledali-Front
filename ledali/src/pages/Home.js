import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTiktok, } from '@fortawesome/free-brands-svg-icons';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import '../styles/Home.css';
import Footer from '../components/Footer';
import SimpleMap from '../components/Maps';


function Home() {
  return (
    <div className="home">
      <div className='home-1'>
        <p className='welcome-text'>Welcome to Ledali Drilling (E.A) Ltd</p>
        <p className='open-text'>
          At Ledali Drilling, we stand out as the leading borehole drilling company in Kenya.
          We are dedicated to providing unmatched expertise in water solutions, solar pumping, and water tanks.
          Our commitment to excellence, integration of cutting-edge technology, and a steadfast focus on sustainability set us apart.
          Experience top-tier drilling services and sustainable water solutions with us:
        </p>
        <nav>
          <ul className="nav-links">
            <li><Link to="#">Call Us</Link></li>
            <li><Link to="#">Whatsapp</Link></li>
            <li><Link to="#">Email</Link></li>
          </ul>
        </nav>
        <div className="circle-frame">
              <img src="./assets/images/slides/image1.jpg" alt='slideshow'/>
        </div>
          <div className='wrap-up'>
            <div>
             <Link to="/about"><p className='get-quality'>Get High Quality Borehole Drilling in Kenya</p></Link>
            </div>
        
              <nav className='serv-li'>
              <ul className="service-links">
                <li><Link to="">Borehole Drilling</Link></li>
                <li><Link to="#">Borehole Survey</Link></li>
                <li><Link to="#">Test Pumping</Link></li>
              </ul>
            </nav>
          </div>
      </div>

<div className='section-2'>
  <div className='section-img'>
    <img src='./assets/images/slides/3.jpg' alt='project'></img>
  </div>
  <div className='transform-text'>
    <h3 className='span-head'>Transforming Lives, One Borehole at a Time</h3>
    <p className='span-paragraph'>
    At Ledali Drilling (E.A) LTD, we're on a mission to make a positive impact in Kenya through our high-quality borehole drilling services.We believe that life flows from the depths below, and our commitment is to bring this hidden treasure to the surface, offering a sustainable water source that nourishes life in its purest form.
Built on a vision to revolutionize borehole drilling in Kenya, we are a vibrant and forward-looking company committed to delivering unmatched water sourcing solutions. Our team of skilled professionals, armed with cutting-edge technology, ensures satisfaction and openness in every project. Experience the benefits of our reliable track record and join the ranks of contented customers who have enjoyed the perks of our economical borehole drilling services.
Embark on your journey with Ledali Drilling (E.A) LTD today, and secure a trustworthy and efficient water source. Connect with us through the "Get Started" button or email us at ledalidrilling@gmail.com. Your journey to a better water supply starts here.
    </p>
  </div>
</div>

<div className='view-card-container'>
<div className='view-div'>
  <p className='view-paragraph'>View Our Services</p>
</div>


  <div class="card">
    <img src="/assets/images/slides/1.jpg" alt="Drilling" class="card-image" />
    <div class="card-content">
      <p class="card-title">Borehole Drilling</p>
      <Link to="/contact" className='card-link'> Order Now</Link>
    </div>
  </div>

  <div class="card">
    <img src="/assets/images/slides/11.jpg" alt="Survey" class="card-image" />
    <div class="card-content">
      <p class="card-title">Borehole Survey</p>
      <Link to="/contact" className='card-link'> Order Now</Link>
    </div>
  </div>

  <div class="card">
    <img src="/assets/images/slides/3.jpg" alt="Test" class="card-image" />
    <div class="card-content">
      <p class="card-title">Test Pumping</p>
      <Link to="/contact" className='card-link'> Order Now</Link>
    </div>
  </div>

  <div class="card">
    <img src="/assets/images/slides/4.jpg" alt="Equip" class="card-image" />
    <div class="card-content">
      <p class="card-title">Equipping Borehole</p>
      <Link to="/contact" className='card-link'> Order Now</Link>
    </div>
  </div>

  <div class="card">
    <img src="/assets/images/slides/5.jpg" alt="solar" class="card-image" />
    <div class="card-content">
      <p class="card-title">Solarization</p>
      <Link to="/contact" className='card-link'> Order Now</Link>
    </div>
  </div>
</div>


<div className='discover'>
  <div className='disc-1'>
    
    <h3 className='discover-head'>Discover the Depths, Unleash the Possibilities</h3>
    <p className='discover-content'>Welcome to the Press Section of Ledali Drilling LTD, your source for the freshest news, achievements, and insights from the forefront of borehole drilling.
    Stay informed about our advancements, partnerships, and contributions to the industry as the leading cost-effective borehole drilling service provider in Kenya.
    We continue to set new standards in water sourcing solutions.
    
    Connect with the best borehole drilling company in Kenya through our social media pages. 
    Follow us on Facebook, Twitter, and Instagram to get real-time updates about our latest happenings, breakthroughs, and contributions in the dynamic world of borehole drilling. 
    Engage with our vibrant online community and be a part of the conversation that shapes the future of water sourcing.</p>
  </div>

      <div className='disc-2'>
          <div className='cont-div'>
            <h4 className='press-content'>Press Section</h4>
          </div>

          <div className='cont-img1'>
            <div className='image-1'>
              <img src='./assets/images/slides/image1.jpg' alt='press' className='press-img1'/>
            </div>
            <div className='image2'>
              <img src='./assets/images/slides/3.jpg' alt='press' className='press-img2'/>
            </div>
          </div>
      </div>
</div>

<div className='social-div'>
<h3 className='media-head'>Find us on Social Media</h3>
    <nav>
      <ul className="social-links">
        <li><a href="#"><FontAwesomeIcon icon={faFacebook} className='custom-icon' /></a>Facebook</li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter} className='custom-icon' /></a>Twitter</li>
        <li><a href="#"><FontAwesomeIcon icon={faInstagram} className='custom-icon'/></a>Instagram</li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className='custom-icon' /></a>Linkedin</li>
        <li><a href="#"><FontAwesomeIcon icon={faTiktok} className='custom-icon' /></a>Tiktok</li>
      </ul>
    </nav>
</div>
<div>

</div>

<div className='value-class'>
  <div className='value-div'>
    <h3>We Value Our Clients</h3>
  </div>
 <marquee behavior="" direction="">
    
   <div class="view-card-container">
   <div class="card-container">
     <div class="card">
       <img src="/assets/images/person.png" alt="individuals" class="card-image" />
       <div class="client-content">
         <p class="client-card">Individuals</p>
       </div>
     </div>
     <div class="card">
       <img src="/assets/images/naks.jpg" alt="nakuru" class="card-image" />
       <div class="client-content">
         <p class="client-card">County Government <br/> of Nakuru</p>
       </div>
     </div>
     <div class="card">
       <img src="/assets/images/ngo.jpg" alt="ngo" class="card-image-1" />
       <div class="client-content-ngo">
         <p class="client-card">NGOs</p>
       </div>
     </div>
     <div class="card">
       <img src="/assets/images/moa.jpg" alt="agric" class="card-image" />
       <div class="client-content">
         <p class="client-card">Ministry of Agriculture</p>
       </div>
     </div>
     <div class="card">
       <img src="/assets/images/rift.jpg" alt="rift" class="card-image-2" />
       <div class="client-content">
         <p class="client-card">Rift Valley Water<br/>Service Board</p>
       </div>
     </div>
   </div>
   </div>
 </marquee>

</div>

<div className='google-map-i'>
<SimpleMap />
</div>
<Footer />
</div>

  );
}

export default Home;