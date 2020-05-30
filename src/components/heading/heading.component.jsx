import React from 'react';
import PropTypes from 'prop-types';

import './heading.styles.scss';

const Heading = ({ small, title }) => (
  <React.Fragment>
    <span className="text-muted small-label">{small}</span>
    <h3 className="mb-3">{title}</h3>
  </React.Fragment>
);

Heading.defaultProps = {
  small: 'Some Cool Small Intro',
  title: 'Heading Title'
};

Heading.propTypes = {
  small: PropTypes.string,
  title: PropTypes.string
};

export default Heading;
