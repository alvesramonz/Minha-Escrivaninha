import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <h1> Home </h1>
      <Link to="/login">
        <h1> Login </h1>
      </Link>
    </Container>
  );
}

export default Home;
