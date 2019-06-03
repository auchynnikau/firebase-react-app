import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import { Background } from './styles';

export const Gallery = (props) => {
  return (
    <Carousel>
      {props.images.map((image, id) =>
        <Carousel.Item key={id}>
          <Background src={image} />
        </Carousel.Item>
      )}
    </Carousel>
  );
}
