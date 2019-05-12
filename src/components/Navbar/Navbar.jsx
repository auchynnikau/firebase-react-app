import * as React from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import './Navbar.scss';

export const NavbarComponent = () => {
  return (
    <Navbar className='navbar navbar--style' collapseOnSelect expand='lg' variant='dark'>
      <Navbar.Brand className='navbar__brand brand brand--style' href='#'>
        React-Bootstrap
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
            <Nav.Link className='nav__link link link--style' href='#'>Features</Nav.Link>
            <Nav.Link className='nav__link link link--style' href='#'>Pricing</Nav.Link>
            <Nav.Link className='nav__link link link--style' href='#'>More deets</Nav.Link>
            <Nav.Link href='dfsf' className='nav__link link link--style'>Dank memes</Nav.Link>
          </Nav>
          <Form className='navbar__form form form--style'>
          <InputGroup className='navbar__input-group input-group input-group--style'>
            <FormControl
            bsPrefix={'form-contro'}
              className='navbar__form-control form-control form-control--style'
              placeholder='Search'
              type='text'
            />
            <InputGroup.Append>
                <Button className='navbar__button button button--style' variant='secondary'>
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
