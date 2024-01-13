import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

class CarouselPage extends Component {
  render() {
    return (
      <div className="carousel-container"> {/* Add your desired classname here */}
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: '70vh' }}
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                Unlock your business's full potential
              </h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                Code your dreams, craft solutions: Where software meets success at Nikaya
              </p>
              <div className="d-inline-block">
                
                
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '70vh' }}
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>People are our asset</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                Quality is never an accident; it is always the result of intelligent effort.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '70vh' }}
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                We don’t just build software; we architect digital experiences.
              </h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                We Prioritize a healthy atmosphere for Consultant's growth
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselPage;
