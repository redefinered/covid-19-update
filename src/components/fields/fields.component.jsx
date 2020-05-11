import React from 'react';
import PropTypes from 'prop-types';
import Field from 'components/field/field.component';
import { Row, Col } from 'react-bootstrap';
import find from 'lodash/find';

const Fields = ({ country, data }) => {
  const selectedItem = find(data, (d) => d.country === country);
  const fields = Object.keys(selectedItem);
  const includedFields = [
    { key: 'cases', label: 'Total Cases', variant: 'info' },
    { key: 'todayCases', label: 'New Cases', variant: 'warning' },
    { key: 'deaths', label: 'Total Deaths', variant: 'danger' },
    { key: 'recovered', label: 'Total Recoveries', variant: 'success' }
  ];

  return (
    <React.Fragment>
      <Row>
        {/* eslint-disable-next-line array-callback-return */}
        {fields.map((field) => {
          let include = find(includedFields, (o) => {
            return o.key === field;
          });
          if (include !== undefined) {
            return (
              <Col key={field}>
                <Field title={include.label} value={selectedItem[field]} color={include.variant} />
              </Col>
            );
          }
        })}
      </Row>
    </React.Fragment>
  );
};

Fields.propTypes = {
  country: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Fields;
