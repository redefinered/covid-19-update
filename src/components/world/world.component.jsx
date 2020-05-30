import React from 'react';
import PropTypes from 'prop-types';
import Field from 'components/field/field.component';
import { Row, Col } from 'react-bootstrap';
import find from 'lodash/find';
import { connect } from 'react-redux';

const World = ({ data }) => {
  const selectedItem = find(data, (d) => d.country === 'World');
  const fields = Object.keys(selectedItem);
  const includedFields = [
    { key: 'cases', label: 'Total Cases', variant: 'light' },
    { key: 'todayCases', label: 'New Cases', variant: 'light' },
    { key: 'deaths', label: 'Total Deaths', variant: 'light' },
    { key: 'recovered', label: 'Total Recoveries', variant: 'light' }
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
                <Field
                  title={include.label}
                  value={selectedItem[field]}
                  color={include.variant}
                  light
                />
              </Col>
            );
          }
        })}
      </Row>
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
