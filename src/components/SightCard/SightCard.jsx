import * as React from 'react';
import { Card } from 'react-bootstrap';
import './SightCard.scss';

export const SightCard = ({sight}) => {
  return (
    <Card className='sight-card sight-card--style'>
      <Card.Img className='sight-card__img' variant="top" src={sight.image} />
      <Card.Body className='sight-card__body'>
        <Card.Title className='sight-card__title title title--style'>{sight.title}</Card.Title>
        <Card.Text className='sight-card__text text text--style'>{sight.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
