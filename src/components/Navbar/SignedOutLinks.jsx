import * as React from 'react';
import {Nav, Button} from 'react-bootstrap';

import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import {SignButton} from './styles';

export class SignedOutLinks extends React.Component {
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

  signInShow() {this.setState({signInShown: true})}
  signUpShow() {this.setState({signUpShown: true})}
  signInClose() {this.setState({signInShown: false})}
  signUpClose() {this.setState({signUpShown: false})}

  render() {
    return (
      <React.Fragment>
        <Nav>
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
        </Nav>
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
