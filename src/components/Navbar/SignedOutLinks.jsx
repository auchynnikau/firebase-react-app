import * as React from 'react';
import { Nav, Button } from 'react-bootstrap';

import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';

import './Navbar.scss';
import './SignedOutLinks.scss';
export class SignedOutLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signInShown: false,
      signUpShown: false,
    };

    this.signInShow = this.signInShow.bind(this);
    this.signInClose = this.signInClose.bind(this);
    this.signUpShow = this.signUpShow.bind(this);
    this.signUpClose = this.signUpClose.bind(this);
  }

  signInShow() {this.setState({ signInShown: true });}
  signInClose() {this.setState({ signInShown: false });}

  signUpShow() {this.setState({ signUpShown: true });}
  signUpClose() {this.setState({ signUpShown: false });}

  render() {
    return (
      <React.Fragment>
        <Nav>
          <Button variant="outline-success" onClick={ this.signInShow }>Вход</Button>
          <Button className='register-btn' variant="outline-success" onClick={ this.signUpShow }>Регистрация</Button>
        </Nav>
        <SignIn
          isShown={ this.state.signInShown }
          handleShow={ this.signInShow }
          handleClose={ this.signInClose }
        />
        <SignUp
          isShown={ this.state.signUpShown }
          handleShow={ this.signUpShow }
          handleClose={ this.signUpClose }
        />
      </React.Fragment>
    );
  }
}
