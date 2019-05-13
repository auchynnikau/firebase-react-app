import * as React from 'react';
import { CardColumns } from 'react-bootstrap';

import { SightCard } from '../SightsCard';

export const SightsList = ({sights}) => {
  
  return (
    <CardColumns>
      {sights && sights.map(sight => {
        return (
          <SightCard key={ sight.id } sight={ sight } />
        )
      })}
    </CardColumns>
  );
}
