import React from 'react';

function About() {
  return (
    <div className="About">
      <div className="hero-section">
        <div className="hero-text">
          <h1>About Me</h1>
          <h4>Get to Know Misha Zafarani</h4>
        </div>
      </div>
      <div className="bio-section">
        <div className="bio-container">
          <div className="bio-text">
            <h2>My Bio</h2>
            <p>
              Hi, I'm Misha Zafarani, a passionate frontend developer with two years of experience in web development. I have a strong eye for design and a knack for creating engaging user experiences that keep visitors coming back for more.
            </p>
            <p>
            As a frontend developer, I specialize in creating responsive and intuitive websites that are optimized for all devices. From ideation to execution, I'm committed to delivering exceptional results that exceed my clients' expectations.
            </p>
            <p>
            I'm skilled in a wide range of frontend technologies, including HTML, CSS, JavaScript, and various frontend frameworks such as React and Vue. I'm also well-versed in UX design principles, which allows me to create websites that not only look great but also provide an intuitive and seamless user experience.
            </p>
            <p>
            My passion for web development extends beyond my work as a frontend developer. I love staying up to date with the latest trends and technologies in the industry, and I'm constantly seeking new ways to improve my skills and knowledge.
              In my free time, I enjoy experimenting with new coding techniques and contributing to open-source projects. I'm also an avid reader and love to spend my downtime exploring new books and articles related to web development.
            </p>
            <p>
            If you're looking for a frontend developer who's passionate about web development, has the skills and experience to deliver exceptional results, and is committed to staying on the cutting edge of the industry, then I'm the developer for you. Let's work together to bring your ideas to life!
            </p>
              
            
          </div>
        </div>
      </div>
      <div className="edu-exp-section">
        <div className="edu-exp-container">
          <div className="education">
            <h2>Education</h2>
              <p>Bachelor's degree in Civil Engineering,  Moscow State University of Civil Engineering</p>
              <p>Certificate in Web Development, Online Web Development Institute</p>
          </div>
          <div className="experience">
            <h2>Experience</h2>
              <p>Frontend Developer, Freelancer (2021 - present)</p>
              <p>Web Developer, Moscow State Engineering Company (2019 - 2021)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;