import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
  StyledJumbotron,
  Title,
  Description,
} from './styles';

export const CityCard = ({city}) => {
  return (
    <StyledJumbotron src={city.image}>
      <Title>{city.title}</Title>
      <Description>
        {city.description}
      </Description>
      <p>
        <Button variant='success'>Узнать больше</Button>
      </p>
    </StyledJumbotron>
  );
}
