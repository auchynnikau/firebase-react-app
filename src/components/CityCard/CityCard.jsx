import * as React from 'react';
import {Button} from 'react-bootstrap';

import {
  StyledJumbotron,
  Title,
  Description,
  ButtonWrapper,
} from './styles';

export const CityCard = ({city}) => {
  return (
    <StyledJumbotron src={city.image}>
      <Title>{city.title}</Title>
      <Description>
        {city.description}
      </Description>
      <ButtonWrapper>
        <Button variant='success'>Узнать больше</Button>
      </ButtonWrapper>
    </StyledJumbotron>
  );
}
