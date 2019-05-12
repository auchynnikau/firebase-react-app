import * as React from 'react';
import { Nav } from 'react-bootstrap';

import './Navbar.scss';

export const SignedInLinks = () => {
  return (
    <Nav>
      <Nav.Link className='nav__link link link--style'>Выйти</Nav.Link>
      <Nav.Link className='nav__link link link--style'>ИИ</Nav.Link>
    </Nav>
  );
}
