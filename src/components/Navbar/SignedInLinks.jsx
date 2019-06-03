import * as React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
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
        {
          this.props.profile.initials === undefined &&
            <Button
              variant='outline-info'
              onClick={ this.addSightShow }
              className='nav__link link link--style'
            >
              Добавить
            </Button>
        }
        <Button variant='outline-success' onClick={ this.props.signOut } className='nav__link link link--style'>Выйти</Button>
        <Nav.Link className='nav__link link link--style'>
          { this.props.profile.initials }
        </Nav.Link>
        <AddSight
          isShown={ this.state.addSightShown }
          handleShow={ this.addSightShow }
          handleClose={ this.addSightClose }
        />
      </Nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);