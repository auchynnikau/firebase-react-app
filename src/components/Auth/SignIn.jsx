import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Alert } from 'react-bootstrap';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
    };

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError } = this.props;

    console.log(this.props);
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
            { authError && <Alert variant='danger'>Неверный пароль!</Alert> }
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
  return {
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
