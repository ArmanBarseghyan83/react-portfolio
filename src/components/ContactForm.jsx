import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function ContantForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if ((!name, !email, !message)) return;

    setName('');
    setEmail('');
    setMessage('');
  };

  const inputBlurHandler = (e) => {
    const inputType = e?.target?.type;

    if (inputType === 'text') {
      if (name) {
        setErrorMessage('');
      } else {
        setErrorMessage('Name is required');
      }
    } else if (inputType === 'email') {
      const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (email) {
        !emailRegex.test(email)
          ? setErrorMessage('Invalid email address!')
          : setErrorMessage('');
      } else {
        setErrorMessage('Email is required!');
      }
    } else {
      !message ? setErrorMessage('Message is required!') : setErrorMessage('');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={inputBlurHandler}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={inputBlurHandler}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                row="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={inputBlurHandler}
                required
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit
            </Button>
            <p className='mt-2 text-danger'>{errorMessage}</p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
