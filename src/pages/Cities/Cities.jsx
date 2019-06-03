import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { CitiesList } from '../../components/CitiesList/CitiesList';

export class Cities extends React.Component {
  render() {
    const { cities } = this.props;

    return (
      <React.Fragment>
        <CitiesList cities={ cities } />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.firestore.ordered.cities,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'cities' }]),
)(Cities);
