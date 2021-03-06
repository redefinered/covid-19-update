import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import './field.styles.css';

const Field = ({ title, value, color }) => {
  const formatNumber = (num) => {
    if (!num) return 0;
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  return (
    <Card text="white" bg={color} className="mb-4">
      <Card.Body className="text-center my-4">
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text className="figure">{formatNumber(value)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Field;
