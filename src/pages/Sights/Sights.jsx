import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase';

import {SightCard} from '../../components/SightCard/SightCard';
import {Columns} from './styles';

export class Sights extends React.Component {
  componentDidMount() {window.scrollTo(0, 0)}

  render() {
    const {sights} = this.props;
    const region = this.props.match.params.region;

    return (
      <Columns>
        {sights && sights.map(sight =>
          sight.region === region &&
          <Link key={sight.id} to={`/sights/${region}/` + sight.id}>
            <SightCard sight={sight} />
          </Link>
        )}
      </Columns>
    )
  }
}

const mapStateToProps = state => {
  return {
    sights: state.firestore.ordered.sights,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'sights'}]),
)(Sights);
