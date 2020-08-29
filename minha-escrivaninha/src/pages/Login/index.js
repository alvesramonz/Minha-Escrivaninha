import React from 'react';

import LoginForm from './LoginForm';
import { Container } from './styles';

function Login() {
  function submit(data) {
    console.log(data);
  }

  return (
    <Container>
      <h1>Login Page</h1>

      <LoginForm submit={submit} />
    </Container>
  );
}

export default Login;
