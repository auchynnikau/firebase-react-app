import * as React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const SightInfo = (props) => {
  const { sight } = props;

  if (sight) {
    return (
      <div>
        <div>{sight.title}</div>
        <div>{sight.content}</div>
        <div>{sight.id}</div>
      </div>
    );
  } else {
    return (
      <p>Loading...</p>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const sights = state.firestore.data.sights;
  const sight = sights ? sights[id] : null;

  return {
    sight: sight
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'sights'
  }])
)(SightInfo);
