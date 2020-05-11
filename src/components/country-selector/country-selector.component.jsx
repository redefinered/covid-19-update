/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import CustomToggle from './custom-toggle.component';
import CustomMenu from './custom-menu.component';

import './country-selector.styles.css';

const CountrySelector = ({ data, handleSelect, selectedCountry }) => {
  return (
    <Dropdown onSelect={(e) => handleSelect(e)}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {selectedCountry}
      </Dropdown.Toggle>

      <Dropdown.Menu bsPrefix="dropdown-menu" as={CustomMenu}>
        {data.map((d) => {
          return (
            <Dropdown.Item
              key={`${d.country}`}
              eventKey={d.country}
              active={d.country === selectedCountry}
            >
              {d.country}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

CountrySelector.propTypes = {
  data: PropTypes.array
};

export default CountrySelector;
