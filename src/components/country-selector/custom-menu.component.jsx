/* eslint-disable react/display-name */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type a country..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) => !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

CustomMenu.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  'aria-labelledby': PropTypes.string
};

export default CustomMenu;
