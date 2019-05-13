import * as React from 'react';
import { connect } from 'react-redux';

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
    sights: state.sight.sights
  }
}

export default connect(mapStateToProps)(Dashboard);
