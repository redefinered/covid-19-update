import React from 'react';
import PropTypes from 'prop-types';
import Field from 'components/field/field.component';
import { Row, Col } from 'react-bootstrap';
import find from 'lodash/find';

const Fields = ({ country, data }) => {
  const selectedItem = find(data, (d) => d.country === country);
  console.log('x', selectedItem);
  const fields = Object.keys(selectedItem);
  const include = ['cases', 'todayCases', 'deaths', 'recovered'];
  const titles = {
    cases: 'Total Cases',
    todayCases: 'New Cases',
    deaths: 'Deaths',
    recovered: 'Recoveries'
  };

  return (
    <React.Fragment>
      <Row>
        {/* eslint-disable-next-line array-callback-return */}
        {fields.map((field) => {
          if (include.includes(field)) {
            return (
              <Col key={field}>
                <Field title={titles[field]} value={selectedItem[field]} />
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
