import React from 'react';
import PropTypes from 'prop-types';
import { Container, Spinner } from 'react-bootstrap';

const Loader = ({ description }) => (
  <Container
    className="d-flex align-items-center justify-content-center flex-column"
    style={{ height: 200 }}
  >
    <div>
      <Spinner animation="grow" variant="primary" role="status" className="mb-3">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
    {description ? <p>{description}</p> : null}
  </Container>
);

Loader.propTypes = {
  description: PropTypes.string
};

export default Loader;
