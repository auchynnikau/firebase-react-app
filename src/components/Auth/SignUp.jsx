import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

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

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Modal show={this.props.isShown} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вход</Modal.Title>
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
                placeholder='Введите пароль'
              />
            </Form.Group>
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
