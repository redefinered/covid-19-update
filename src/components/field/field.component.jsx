import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Field = ({ title, value }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  return (
    <Card>
      <Card.Body className="text-center my-4">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formatNumber(value)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default Field;
