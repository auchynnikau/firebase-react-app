import * as React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { SightsList } from '../../components';
import { Redirect } from 'react-router-dom';
class Dashboard extends React.Component {
  render() {
    const { sights, auth } = this.props;

    // if (!auth.uid) return <Redirect to='/' />

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
  firestoreConnect([
    { collection: 'sights' },
  ]),
)(Dashboard);
