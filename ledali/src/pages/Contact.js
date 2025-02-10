
import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="contact">

      <div className='contact-div'>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below or reach us at:
        </p>
        <p>Email: ledalidrilling@gmail.com| Phone: 0727 111 133 | 0725 882 092</p>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
