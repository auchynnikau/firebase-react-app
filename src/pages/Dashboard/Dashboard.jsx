import * as React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { SightsList } from '../../components';

class Dashboard extends React.Component {
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
    sights: state.firestore.ordered.sights
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sights' },
  ]),
)(Dashboard);
