import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { SightsList } from '../../components/SightsList/SightsList';

export class Dashboard extends React.Component {
  render() {
    const { sights } = this.props;

    return (
      <React.Fragment>
        <SightsList sights={ sights } />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sights: state.firestore.ordered.sights,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'sights' }]),
)(Dashboard);
