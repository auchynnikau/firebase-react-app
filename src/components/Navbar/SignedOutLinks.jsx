import * as React from 'react';
import { Nav } from 'react-bootstrap';

import './Navbar.scss';

export const SignedOutLinks = () => {
  return (
    <Nav>
      <Nav.Link className='nav__link link link--style'>Войти</Nav.Link>
      <Nav.Link className='nav__link link link--style'>Регистрация</Nav.Link>
    </Nav>
  );
}
