import React from 'react';
import { Carousel } from 'react-bootstrap';

const ExampleCarouselImage = ({ src, alt }) => (
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
    />
  </Carousel.Item>
);

export default ExampleCarouselImage;