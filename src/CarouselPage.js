import React from 'react'
import{ Carousel,Button} from 'react-bootstrap';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'


function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
      <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Unlock your business's full potential</h3>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Code your dreams, craft solutions: Where software meets success at Nikaya
        </p>
        <div className="d-inline-block">
        <Button variant="primary" href="/Jumbotron" className="me-4">About Us</Button>
        <Button variant="primary" href="/CardPage" className="me-4">Services</Button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>People are our asset</h3>
        <p>Quality is never an accident; it is always the result of intelligent effort.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>We don’t just build software; we architect digital experiences.</h3>
        <p>
          We Prioritize a healthy atmosphere for Consultant's growth
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage