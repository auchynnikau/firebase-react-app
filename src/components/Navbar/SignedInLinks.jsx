import * as React from 'react';
import { Nav } from 'react-bootstrap';

import AddSight from '../AddSight/AddSight';
import './Navbar.scss';

export class SignedInLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addSightShown: false,
    };

    this.addSightShow = this.addSightShow.bind(this);
    this.addSightClose = this.addSightClose.bind(this);
  }

  addSightShow() {this.setState({ addSightShown: true });}
  addSightClose() {this.setState({ addSightShown: false });}

  render() {
    return (
      <Nav>
        <Nav.Link onClick={ this.addSightShow } className='nav__link link link--style'>Добавить</Nav.Link>
        <Nav.Link className='nav__link link link--style'>Выйти</Nav.Link>
        <Nav.Link className='nav__link link link--style'>ИИ</Nav.Link>
        <AddSight
          isShown={ this.state.addSightShown }
          handleShow={ this.addSightShow }
          handleClose={ this.addSightClose }
        />
      </Nav>
    );
  }
}
