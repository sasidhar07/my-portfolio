import React, { useState } from 'react';
import './index.css';



const services: Service[] = [
  { title: 'Web Development', description: 'Building fast and scalable web applications using modern technologies.' },
  { title: 'Backend Development', description: 'Designing and maintaining server-side logic, databases, and ensuring efficient data flow.' },
  { title: 'Frontend Development', description: 'Crafting responsive and interactive frontend experiences using React, JavaScript, and CSS.' },
];

const MyService = () => {
  const [activeService, setActiveService] = useState(services[0]);

  const handleServiceClick = (service: Service) => {
    setActiveService(service);
  };

  return (
    <section className="services-container" id='service'>
      <div className="container">
        <h2 className="services-title">Services</h2>
        <div className="services-flex">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div
                className={`service-content ${activeService === service ? 'service-active' : ''}`}
                onClick={() => handleServiceClick(service)}
              >
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="active-service-details">
          <h3 className="active-service-title">{activeService.title}</h3>
          <p className="active-service-description">{activeService.description}</p>
        </div>
      </div>
    </section>
  );
};

export default MyService;
