import * as React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

import {
  ProfileNav,
  SignButton,
  Initials,
} from './styles';

export class SignedInLinks extends React.Component {
  render() {
    return (
      <ProfileNav>
        <SignButton
          variant='outline-success'
          onClick={this.props.signOut}
        >
          Выйти
        </SignButton>
        <Initials>
          {this.props.profile.initials}
        </Initials>
      </ProfileNav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {signOut: () => dispatch(signOut())}
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
