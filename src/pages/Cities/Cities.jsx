import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

import {CityCard} from '../../components/CityCard/CityCard';

import {
  List,
  StyledLink,
} from './styles';

export class Cities extends React.Component {
  render() {
    const {cities} = this.props;

    return (
      <List>
        {cities && cities.map(city => {
          return (
            <StyledLink key={city.id} to={'/cities/' + city.id}>
              <CityCard city={city} />
            </StyledLink>
          )
        })}
      </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    cities: state.firestore.ordered.cities,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'cities'}]),
)(Cities);
