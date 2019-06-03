import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addSight } from '../../store/actions/sightActions';

export class AddSight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      image: '',
    };

    this.titleInput = React.createRef();
    this.contentInput = React.createRef();
    this.imageInput = React.createRef();


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSight(this.state);
  }

  render() {
    return (
      <Modal show={this.props.isShown} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group onChange={this.handleChange}>
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                id='title'
                type='text'
                ref={this.titleInput}
                onChange={this.handleChange}
                placeholder='Введите заголовок'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Описание</Form.Label>
              <Form.Control
                id='content'
                type='text'
                ref={this.contentInput}
                onChange={this.handleChange}
                placeholder='Введите описание'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Изображение</Form.Label>
              <Form.Control
                id='image'
                type='text'
                ref={this.imageInput}
                onChange={this.handleChange}
                placeholder='Укажите адрес изображения'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.handleClose}>
            Закрыть
          </Button>
          <Button variant='success' onClick={this.handleSubmit}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSight: (sight) => dispatch(addSight(sight))
  }
}

export default connect(null, mapDispatchToProps)(AddSight);