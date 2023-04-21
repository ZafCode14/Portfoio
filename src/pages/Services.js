import React from 'react';

function Services() {
  return (
    <div className="Services">
      <div className="hero-section">
        <div className="hero-text">
          <h1>My Services</h1>
          <h4>What I Can Do For You</h4>
        </div>
      </div>
      <div className="services-section">
        <div className="services-container">
          <div className="service">
            <h3>Web Design</h3>
            <p>Creating visual appearance, layout, and overall aesthetic of a website. Includes choosing colors, fonts, images, and other design elements for user-friendly design.</p>
          </div>
          <div className="service">
            <h3>Web Development</h3>
            <p>Technical aspects of creating a website, such as writing code, building databases, and integrating web technologies. Goal is to create a functional website for users.</p>
          </div>
          <div className="service">
            <h3>Responsive Design</h3>
            <p>Web design approach that creates websites optimized for different devices. Layout and content of website adjust automatically to fit device screen size.</p>
          </div>
          <div className="service">
            <h3>UI/UX Design</h3>
            <p>Process of designing a website or application to optimize user experience. Create visually appealing, intuitive user interface and efficient user experience for positive engagement.</p>
          </div>
        </div>
      </div>
      <div className="pricing-section">
        <div className="pricing-container">
          <div className="pricing">
            <h3>How I Work</h3>
            <div>
              <p>
              As a freelance developer, I provide customized pricing based on each client's unique website project requirements, either charging an hourly rate or a fixed project fee. I prioritize clear communication with the client, agreeing on project scope and pricing before beginning any work, and providing regular updates on progress for hourly projects or a detailed breakdown of costs for fixed project fee projects. My ultimate goal is to deliver high-quality work that meets the client's needs within their budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;