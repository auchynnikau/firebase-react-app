import * as React from 'react';
import {Button} from 'react-bootstrap';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import {SignButton, AuthForm} from './styles';

import {connect} from 'react-redux';
import {closeForm} from '../../store/actions/authActions';

class SignedOutLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signInShown: false,
      signUpShown: false,
    };

    this.signInShow = this.signInShow.bind(this);
    this.signUpShow = this.signUpShow.bind(this);
    this.signInClose = this.signInClose.bind(this);
    this.signUpClose = this.signUpClose.bind(this);
  }

  signInShow() {this.setState({signInShown: true})};
  signUpShow() {this.setState({signUpShown: true})};
  signInClose() {
    this.setState({signInShown: false});
    this.props.closeForm();
  };
  signUpClose() {
    this.setState({signUpShown: false});
    this.props.closeForm();
  };

  render() {
    return (
      <React.Fragment>
        <AuthForm>
          <Button
            variant='outline-success'
            onClick={this.signInShow}
          >
            Вход
          </Button>
          <SignButton
            variant='outline-success'
            onClick={this.signUpShow}
          >
            Регистрация
          </SignButton>
        </AuthForm>
        <SignIn
          handleShow={this.signInShow}
          handleClose={this.signInClose}
          isShown={this.state.signInShown}
        />
        <SignUp
          handleShow={this.signUpShow}
          handleClose={this.signUpClose}
          isShown={this.state.signUpShown}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeForm: () => dispatch(closeForm()),
});

export default connect(null, mapDispatchToProps)(SignedOutLinks);
