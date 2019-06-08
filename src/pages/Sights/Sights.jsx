import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';

import {SightCard} from '../../components/SightCard/SightCard';
import {Columns} from './styles';

export class Sights extends React.Component {
  render() {
    const {sights} = this.props;

    return (
      <Columns>
        {sights && sights.map(sight => {
          return (
            <Link key={sight.id} to={'/sights/' + sight.id}>
              <SightCard sight={sight} />
            </Link>
          )
        })}

        {/* <div>
          {sights && sights.map(sight =>
            sight.region === 'minsk' &&
            <Link key={ sight.id } to={ '/sights/' + sight.id }>
              <SightCard sight={ sight } />
            </Link>
          )}
        </div> */}
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
