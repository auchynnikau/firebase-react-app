import * as React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {signUp} from '../../store/actions/authActions';
import {connect} from 'react-redux';
import {Alert} from 'react-bootstrap';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
      firstName: 'Default',
      lastName: 'Name',
    };

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.firstNameInput = React.createRef();
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const {authError} = this.props;

    const errors = {
      error: [
        'The email address is badly formatted.',
        'The password must be 6 characters long or more.',
        'Password should be at least 6 characters',
        'There is no user record corresponding to this identifier. The user may have been deleted.',
        'The password is invalid or the user does not have a password.',
      ],

      translate: [
        `Адрес электронной почты неверно отформатирован.`,
        `Пароль должен состоять из 6 или более символов.`,
        `Пароль должен быть не менее 6 символов`,
        `Нет записи пользователя, соответствующей этому адресу электронной почты.
        Пользователь, возможно, был удален.`,
        `Пароль неверен или у пользователя нет пароля.`,
      ],
    };

    return (
      <Modal
        show={this.props.isShown}
        onHide={this.props.handleClose}
      >
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
                type='password'
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
            {authError &&
              errors.error.map((error, id) =>
                error === authError &&
                <Alert variant='danger'>
                  {errors.translate[id]}
                </Alert>
              )
            }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={this.props.handleClose}
          >
            Закрыть
          </Button>
          <Button
            variant='success'
            onClick={this.handleSubmit}
          >
            Зарегистрироваться
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {authError: state.auth.authError}
}

const mapDispatchToProps = (dispatch) => {
  return {signUp: (newUser) => dispatch(signUp(newUser))}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
