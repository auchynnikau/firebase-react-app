import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Tooltip, Overlay } from 'react-bootstrap';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    };

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    console.log(this.props)
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { authError } = this.props;

    return (
      <Modal show={this.props.isShown} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group onChange={this.handleChange}>
              <Form.Label>Имя</Form.Label>
              <Form.Control
                id='firstName'
                type='text'
                ref={this.firstNameInput}
                onChange={this.handleChange}
                placeholder='Введите свое имя'
              />
            </Form.Group>
            <Form.Group onChange={this.handleChange}>
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                id='lastName'
                type='text'
                ref={this.lastInput}
                onChange={this.handleChange}
                placeholder='Введите свою фамилию'
              />
            </Form.Group>
            <Form.Group onChange={this.handleChange}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                id='email'
                type='email'
                ref={this.emailInput}
                onChange={this.handleChange}
                placeholder='Введите свой email'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                id='password'
                type='password'
                ref={this.passwordInput}
                onChange={this.handleChange}
                placeholder='Придумайте пароль'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.handleClose}>
            Закрыть
          </Button>
          <Button variant='success' onClick={this.handleSubmit}>
            Зарегистрироваться
          </Button>
          { authError &&
            <Overlay placement="right">
              {props => (
                <Tooltip id='overlay-example' {...props}>
                  My Tooltip
                </Tooltip>
              )}
            </Overlay>
          }
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
