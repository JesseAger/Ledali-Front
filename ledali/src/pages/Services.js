import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/Service.css';
import Footer from '../components/Footer';

function Services() {
  const services = [
    { title: 'Borehole Drilling', description: 'Reliable borehole drilling services.', image: '/assets/images/slides/4.jpg' },
    { title: 'Test Pumping', description: 'Efficient and durable pump installations.', image: '/assets/images/slides/5.jpg' },
    { title: 'Solarization', description: 'Eco-friendly solar water systems.', image: '/assets/images/slides/6.jpg' },
    { title: 'Equipping Borehole', description: 'Borehole equipment installations', image: '/assets/images/slides/image1.jpg' },
    { title: 'Borehole Survey', description: 'Accurate and data-driven information', image: '/assets/images/slides/11.jpg' },
  ];

  return (
    <div className="services">

      <div className='service-div'>
        <h1>Our Services</h1>
        <div className="service-list">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
