import * as React from 'react';
import {regionsData} from '../../mocks/regionsData';
import {RegionCard} from '../../components/RegionCard/RegionCard';
import {List, Title, StyledLink} from './styles';

export class Regions extends React.Component {
  componentDidMount() {window.scrollTo(0, 0)}

  render() {
    return (
      <List>
        <Title>Области:</Title>
        {regionsData.map(region =>
          <StyledLink key={region.id} to={'/sights/' + region.type}>
            <RegionCard title={region.title} image={region.image} />
          </StyledLink>
        )}
      </List>
    )
  }
}
