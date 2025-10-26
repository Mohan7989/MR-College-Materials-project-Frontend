import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel fade interval={4000} className="mb-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/900x300/?students,library"
          alt="Student Life"
        />
        <Carousel.Caption>
          <h3>Welcome to MRCA Students Hub</h3>
          <p>Your all-in-one academic resource center.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/900x300/?books,education"
          alt="Explore Resources"
        />
        <Carousel.Caption>
          <h3>Find Materials</h3>
          <p>Get semester question papers anytime.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
