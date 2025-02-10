
import React from 'react';
import '../styles/Project.css';
import Footer from '../components/Footer';

function Projects() {
  const projects = [
    {
      title: 'Nakuru Borehole Project',
      description: 'Completed a high-capacity borehole for a farming community in Nakuru.',
      image: '/assets/images/slides/1.jpg',
    },
    {
      title: 'Solar Pump System in Turkana',
      description: 'Installed an eco-friendly solar water pump system in Turkana County.',
      image: '/assets/images/slides/2.jpg',
    },
    {
      title: 'Nairobi Industrial Borehole',
      description: 'Drilled a borehole for an industrial client in Nairobi.',
      image: '/assets/images/slides/3.jpg',
    },
  ];

  return (
    <div className="projects">

      <div className='read-project'>
        <h1>Our Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Projects;
