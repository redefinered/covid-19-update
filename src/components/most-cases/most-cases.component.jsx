import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/heading/heading.component';
import { Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { formatNumber } from 'app.utlis';
import slice from 'lodash/slice';

const MostCases = ({ data }) => {
  const cases = slice(data, 1, 11);
  console.log('x', cases.length);
  return (
    <React.Fragment>
      <Heading small="10 countries with most cases" title="Largest Cases" />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed Cases</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => {
            return (
              <tr key={c.country}>
                <td>{c.country}</td>
                <td>{formatNumber(c.cases)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

MostCases.propTypes = {
  data: PropTypes.array.isRequired
};

const mapStateToProps = ({ casesReducer: { herokuAllStatus: data } }) => {
  return { data };
};

export default connect(mapStateToProps)(MostCases);
