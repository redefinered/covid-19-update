import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Time from 'components/time/time.component';
import Fields from 'components/fields/fields.component';

class RecentCases extends React.Component {
  render() {
    const { data, country } = this.props;

    return (
      <div>
        <h1>Covid-19 Updates</h1>
        <Time />
        <p className="lead">
          This page updates everyday so you stay updated on the global situation regarding the
          Coronovirus pandemic
        </p>
        {data.length === 0 || !country ? <Loader /> : <Fields country={country} data={data} />}
      </div>
    );
  }
}

RecentCases.propTypes = {
  data: PropTypes.array,
  country: PropTypes.string
};
export default RecentCases;
