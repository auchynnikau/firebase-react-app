import * as React from 'react';
import { Card } from 'react-bootstrap';

import './SightCard'

export const SightCard = ({sight}) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{sight.title}</Card.Title>
        <Card.Text>{sight.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
