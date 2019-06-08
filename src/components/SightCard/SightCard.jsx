import * as React from 'react';
import * as fonts from '../../styles/fonts';
import * as palette from '../../styles/colors';
import {Card} from 'react-bootstrap';
import './SightCard.scss';

export const SightCard = ({sight}) => {
  const title = {fontSize: fonts.small, color: palette.black};
  const text = {color: palette.black};

  return (
    <Card id='card'>
      <Card.Img variant='top' src={sight.image} />
      <Card.Body>
        <Card.Title style={title}>{sight.title}</Card.Title>
        <Card.Text style={text}>{sight.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
