import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import find from 'lodash/find';
import { connect } from 'react-redux';
import { formatNumber } from 'app.utlis';

import './world.styles.scss';

const World = ({ data }) => {
  const worldcases = find(data, (d) => d.country === 'World');
  const includedFields = [
    { key: 'cases', label: 'Confirmed Cases', variant: 'light' },
    { key: 'todayCases', label: 'New Cases', variant: 'light' },
    { key: 'deaths', label: 'Deaths', variant: 'light' },
    { key: 'recovered', label: 'Recoveries', variant: 'light' }
  ];

  return (
    <React.Fragment>
      <Table bordered size="sm">
        <thead>
          <tr>
            {includedFields.map((f) => {
              return (
                <th key={f.key} className={`${f.key}-label`}>
                  {f.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {includedFields.map((f) => {
              return <td key={f.key}>{formatNumber(worldcases[f.key])}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

World.propTypes = {
  data: PropTypes.array.isRequired
};

const mapStateToProps = ({ casesReducer: { herokuAllStatus } }) => {
  return { data: herokuAllStatus };
};

export default connect(mapStateToProps)(World);
