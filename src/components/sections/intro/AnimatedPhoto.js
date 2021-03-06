import React from "react";
import { Carousel } from "react-bootstrap";

const AnimatedPhoto = () => {
  return (
    <Carousel style={{width: "70%", height: "400px"}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://dummyimage.com/600x1400/000/fff"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://dummyimage.com/600x1400/000/fff"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://dummyimage.com/600x1400/000/fff"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AnimatedPhoto;
