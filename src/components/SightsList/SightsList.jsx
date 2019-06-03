import * as React from 'react';
import { CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SightCard } from '../SightCard/SightCard';

export const SightsList = ({sights}) => {
  
  return (
    <CardColumns style={{ marginTop: '5.5rem', marginLeft: '1rem', marginRight: '1rem' }}>
      {sights && sights.map(sight => {
        return (
          <Link key={ sight.id } to={ '/sights/' + sight.id }>
            <SightCard sight={ sight } />
          </Link>
        )
      })}
    </CardColumns>
  );
}
