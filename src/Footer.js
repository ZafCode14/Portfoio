import React from "react";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <h4>About Me</h4>
            <p>
              Hi there! My name is Misha, and I'm a frontend developer with a passion for creating beautiful and functional websites.
            </p>
          </div>
          <div className="col-2">
            <h4>Follow Me</h4>
            <div className="social-media">
                <a href="https://www.facebook.com/mohamed.g.zaafarani" target="_blank" rel="noreferrer">
                  <img alt="img" src="images/facebook.png" className="social-media-logo"/>
                </a>
                <a href="https://www.instagram.com/zafar_wp/" target="_blank" rel="noreferrer">
                  <img alt="img" src="images/instagram.png" className="social-media-logo"/>
                </a>
            </div>
          </div>
          <div className="col-3">
            <h4>Contact Me</h4>
            <p>
              Email: zafarwp14@gmail.com
            </p>
          </div>
        </div>
        <div className="copyright">
          <div className="col-md-12">
            <p className="text-center">
              &copy; 2023 ZafCode. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
