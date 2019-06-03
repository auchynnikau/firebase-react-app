import * as React from 'react';
import { CityCard } from '../CityCard/CityCard';

import {
  List,
  StyledLink,
} from './styles';

export const CitiesList = ({cities}) => {
  return (
    <List>
      {cities && cities.map(city => {
        return (
          <StyledLink key={ city.id } to={ '/cities/' + city.id }>
            <CityCard city={ city } />
          </StyledLink>
        )
      })}
    </List>
  );
}
