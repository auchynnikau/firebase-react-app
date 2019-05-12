import * as React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';

import { SignedInLinks } from './SignedInLinks';
import { SignedOutLinks } from './SignedOutLinks';

import './Navbar.scss';

export const NavbarComponent = () => {
  return (
    <Navbar className='navbar navbar--style' collapseOnSelect expand='lg' variant='dark'>
      <Navbar.Brand className='navbar__brand brand brand--style' href='#'>
        Some title
      </Navbar.Brand>
      <Navbar.Toggle
        className='navbar__toggle toggle toggle--style'
        aria-controls='navbar-collapse'
      />
      <Navbar.Collapse
        id='navbar-collapse'
        className='navbar__collapse collapse collapse--style'
      >
        <div className='collapse__container'>
          <Nav className='navbar__nav nav nav--style'>
            <Nav.Link className='nav__link link link--style'>На главную</Nav.Link>
            <Nav.Link className='nav__link link link--style'>Города</Nav.Link>
            <Nav.Link className='nav__link link link--style'>Достопримечательности</Nav.Link>
            <Nav.Link className='nav__link link link--style'>О сайте</Nav.Link>
          </Nav>
          <Form className='navbar__form form form--style'>
            <SignedInLinks />
            <SignedOutLinks />
          </Form>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
