import * as React from 'react';
import { CardColumns } from 'react-bootstrap';

import { SightseeingCardComponent } from '../SightseeingCard';

export const SightseeingListComponent = () => {
  return (
    <CardColumns>
      <SightseeingCardComponent />
      <SightseeingCardComponent />
      <SightseeingCardComponent />
      <SightseeingCardComponent />
    </CardColumns>
  );
}
