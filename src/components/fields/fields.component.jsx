import React from 'react';
import PropTypes from 'prop-types';
import Field from 'components/field/field.component';
import Heading from 'components/heading/heading.component';
import { Row, Col } from 'react-bootstrap';
import find from 'lodash/find';

const Fields = ({ data, country }) => {
  const selectedItem = find(data, (d) => d.country === country);
  const fields = Object.keys(selectedItem);
  const includedFields = [
    { key: 'cases', label: 'Confirmed Cases', variant: 'info' },
    { key: 'todayCases', label: 'New Cases', variant: 'warning' },
    { key: 'deaths', label: 'Deaths', variant: 'danger' },
    { key: 'recovered', label: 'Recoveries', variant: 'success' }
  ];

  return (
    <React.Fragment>
      <Heading small={`Cases in ${country}`} title="Country Overview" />
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