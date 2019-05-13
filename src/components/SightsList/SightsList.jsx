import * as React from 'react';
import { CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SightCard } from '../SightCard';

export const SightsList = ({sights}) => {
  
  return (
    <CardColumns>
      {sights && sights.map(sight => {
        return (
          <Link to={ '/sights/' + sight.id }>
            <SightCard key={ sight.id } sight={ sight } />
          </Link>
        )
      })}
    </CardColumns>
  );
}
