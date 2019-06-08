import * as React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Alert} from 'react-bootstrap';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
    };

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const {authError} = this.props;

    const errors = {
      error: [
        'The email address is badly formatted.',
        'There is no user record corresponding to this identifier. The user may have been deleted.',
        'The password is invalid or the user does not have a password.',
      ],

      translate: [
        `Адрес электронной почты неверно отформатирован.`,
        `Нет записи пользователя, соответствующей этому адресу электронной почты.
        Пользователь, возможно, был удален.`,
        `Пароль неверен или у пользователя нет пароля.`,
      ],
    };

    return (
      <Modal show={this.props.isShown} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                placeholder='Введите пароль'
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
          <Button variant='secondary' onClick={this.props.handleClose}>
            Закрыть
          </Button>
          <Button variant='success' onClick={this.handleSubmit}>
            Войти
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
  return {signIn: (creds) => dispatch(signIn(creds))}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
