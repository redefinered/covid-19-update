import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loader = () => (
  <Container className="d-flex align-items-center justify-content-center" style={{ height: 200 }}>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </Container>
);

export default Loader;
