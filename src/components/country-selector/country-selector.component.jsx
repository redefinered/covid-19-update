/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import sortBy from 'lodash/sortBy';

import './country-selector.styles.css';

const CountrySelector = ({ data, handleSelect, selectedCountry, handleSearch, searchString }) => {
  let dropdownItems = [];
  let filteredData = filter(data, (o) =>
    includes(o.country.toLowerCase(), searchString.toLowerCase())
  );

  // sort by country alphabetical
  filteredData = sortBy(filteredData, (o) => o.country);

  // eslint-disable-next-line
  filteredData.map((d) => {
    dropdownItems.push(
      <Dropdown.Item
        value={d.country}
        key={d.country}
        active={d.country === selectedCountry}
        onClick={(event) => handleSelect(event)}
      >
        {d.country}
      </Dropdown.Item>
    );
  });
  return (
    <Dropdown>
      <Dropdown.Toggle className="btn-lg" variant="primary" id="dropdown-basic">
        {selectedCountry}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="px-4 my-2">
          <Form.Control
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="Search your country..."
          />
        </div>
        <div className="dropdown-menu-list">{dropdownItems}</div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

CountrySelector.propTypes = {
  data: PropTypes.array
};

export default CountrySelector;
