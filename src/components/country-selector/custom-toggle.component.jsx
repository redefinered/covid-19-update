/* eslint-disable react/display-name */

import React from 'react';
import PropTypes from 'prop-types';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <button
    className="btn btn-primary dropdown-toggle btn-lg"
    type="button"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </button>
));

CustomToggle.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
};

export default CustomToggle;
