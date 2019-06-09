import * as React from 'react';
import {StyledJumbotron, Title} from './styles';

export const RegionCard = ({title, image}) => {
  return (
    <StyledJumbotron src={image}>
      <Title>{title}</Title>
    </StyledJumbotron>
  );
}
