import * as React from 'react';
import * as fonts from '../../styles/fonts';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import logo from '../../assets/icons/logo.svg';
import SignedInLinks from './SignedInLinks';
import {SignedOutLinks} from './SignedOutLinks';

import {
  NavMenu,
  Logo,
  CollapseContainer,
  NavForm,
} from './styles';
import './styles.scss';

export const NavbarComponent = props => {
  const {auth, profile} = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  const linkStyle = {fontSize: fonts.medium, fontWeight: 'lighter'};

  return (
    <NavMenu collapseOnSelect expand='lg' variant='dark'>
      <Logo src={logo} as={Link} to='/' />
      <Navbar.Toggle aria-controls='navbar-collapse' />
      <Navbar.Collapse id='navbar-collapse'>
        <CollapseContainer>
          <Nav style={linkStyle}>
            <Nav.Link className='link' as={Link} to='/'>На главную</Nav.Link>
            <Nav.Link className='link' as={Link} to='/cities'>Города</Nav.Link>
            <Nav.Link className='link' as={Link} to='/regions'>Достопримечательности</Nav.Link>
            <Nav.Link className='link' as={Link} to='/about'>О сайте</Nav.Link>
          </Nav>
          <NavForm>{links}</NavForm>
        </CollapseContainer>
      </Navbar.Collapse>
    </NavMenu>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(NavbarComponent);
