import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth, setId}) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    const { email, password } = e.target;
    // console.log(email.value, password.value);
    localStorage.setItem(email.value, JSON.stringify({loginStatus: true}));
    // e.preventDefault();
    // console.log("login user function issue");
    setAuth(true);
    setId(email);
    navigate('/');
  };

  return (
      <Container className="login-container">
        <Form onSubmit={(e) => loginUser(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
  )
}

export default Login