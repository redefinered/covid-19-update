import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Time from 'components/time/time.component';
import CountrySelector from 'components/country-selector/country-selector.component';
import Fields from 'components/fields/fields.component';

class RecentCases extends React.Component {
  render() {
    const { data, handleSelect, country, handleSearch, searchString } = this.props;

    if (data.length === 0 || !country) return <Loader />;

    return (
      <div>
        <h1>Covid-19 Updates</h1>
        <Time />
        <p className="lead">
          This page updates everyday so you stay updated on the global situation regarding the
          Coronovirus pandemic
        </p>
        <div className="mb-3">
          <CountrySelector
            data={data}
            handleSelect={handleSelect}
            selectedCountry={country}
            handleSearch={handleSearch}
            searchString={searchString}
          />
        </div>
        <Fields country={country} data={data} />
      </div>
    );
  }
}

RecentCases.propTypes = {
  data: PropTypes.array,
  country: PropTypes.string,
  handleSelect: PropTypes.func,
  handleSearch: PropTypes.func,
  searchString: PropTypes.string
};

export default RecentCases;
