import React from 'react';
import './Jumbotron.css'; // Import your custom CSS file
import about from '../images/about.jpg'
const JumbotronWithImage = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              src={about} // Replace with your image URL
              className="img-fluid"
              alt="Placeholder"
            />
          </div>
          <div className="col-md-6">
            <div className="jumbotron-content">
              <h1 className="display-4">Welcome to Nikaya!</h1>
              <p className="lead">Who we are?</p>
              <hr className="my-4" />
              <p>Nikaya is a trusted provider of comprehensive IT staffing and consulting solutions. With a deep understanding of clients' unique needs, we are dedicated to helping them build successful teams by delivering the highest quality IT staffing solutions. Our rigorous screening methods and extensive database of qualified resources ensure that we provide the right talent to help clients achieve their goals.</p>
              <p className="lead">
              <a className="btn btn-primary btn-lg" href="/Carousel" role="button">
            Learn more
          </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JumbotronWithImage;
