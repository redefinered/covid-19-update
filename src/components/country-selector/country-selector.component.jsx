/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

import { connect } from 'react-redux';

import './country-selector.styles.css';

const CountrySelector = ({
  isFetching,
  data,
  handleSelect,
  selectedCountry,
  handleSearch,
  searchString
}) => {
  let dropdownItems = [];
  let filteredData = filter(data, (o) => includes(o.slug, searchString.toLowerCase()));

  // eslint-disable-next-line
  filteredData.map((d) => {
    dropdownItems.push(
      <Dropdown.Item
        key={d.name}
        value={d.name}
        active={d.name === selectedCountry}
        onClick={(event) => handleSelect(event)}
      >
        {d.name}
      </Dropdown.Item>
    );
  });
  return (
    <Dropdown>
      <Dropdown.Toggle disabled={isFetching} variant="primary" id="dropdown-basic">
        {isFetching ? 'Fetching...' : selectedCountry}
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
  countries: PropTypes.array
};

const mapStateToProps = ({ casesReducer: { countries } }) => {
  return { data: countries };
};

export default connect(mapStateToProps)(CountrySelector);
