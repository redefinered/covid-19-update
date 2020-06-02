import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Heading from 'components/heading/heading.component';
import World from 'components/world/world.component';
import Chart from 'components/chart/chart.component';
import Overview from 'components/overview/overview.component';
import MostCases from 'components/most-cases/most-cases.component';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Creators } from 'modules/ducks/cases.actions';
import { setUpCountriesData } from './homepage.utils';
import find from 'lodash/find';

import './homepage.styles.scss';

const { REACT_APP_VERSION } = process.env;
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  componentDidMount() {
    this.props.getInitialDataAction();
  }

  componentDidUpdate(prevProps) {
    // set countries data
    if (prevProps.herokuData !== this.props.herokuData) {
      const countries = setUpCountriesData(this.props.herokuData);
      this.props.setCountriesAction(countries);
    }

    // get cases
    if (
      this.props.selectedCountry &&
      this.props.countries.length &&
      prevProps.countries !== this.props.countries
    ) {
      let { slug } = find(this.props.countries, (c) => c.name === this.props.selectedCountry);
      this.props.getCasesByCountryAction(slug);
    }

    if (prevProps.selectedCountry !== this.props.selectedCountry) {
      let country = find(this.props.countries, (c) => c.name === this.props.selectedCountry);
      if (country) this.props.getCasesByCountryAction(country.slug);
    }
  }

  render() {
    const {
      error,
      isFetching,
      isFetchingGrahpData,
      herokuData,
      selectedCountry,
      countries
    } = this.props;

    if (isFetching || !selectedCountry || herokuData.length === 0)
      return <Loader description="Getting data ready..." />;

    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
      <Container fluid>
        <Row className="my-3">
          <Col lg="9" className="main">
            <Row>
              <Col lg="4">
                <Overview country={selectedCountry} data={herokuData} />
              </Col>
              <Col lg="8">
                <Heading small="Worldwide" title="World Overview" />
                <World />
                <Chart
                  error={error}
                  countries={countries}
                  selectedCountry={selectedCountry}
                  isFetching={isFetchingGrahpData}
                  herokuData={herokuData}
                />
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="sidebar">
            {/* sidebar here */}
            <MostCases />
          </Col>
        </Row>
        <footer className="py-3">
          <p className="text-muted">&copy; reddeguzman | {`v${REACT_APP_VERSION}`}</p>
        </footer>
      </Container>
    );
  }
}

Homepage.propTypes = {
  // reducers
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  isFetchingGrahpData: PropTypes.bool,
  selectedCountry: PropTypes.string,
  countries: PropTypes.array,
  herokuData: PropTypes.array,
  // actions
  getInitialDataAction: PropTypes.func,
  getCasesByCountryAction: PropTypes.func,
  setCountriesAction: PropTypes.func
};

const mapStateToProps = (state) => {
  const {
    error,
    isFetching,
    isFetchingGrahpData,
    country: selectedCountry,
    countries,
    herokuAllStatus: herokuData
  } = state.casesReducer;
  return { error, isFetching, isFetchingGrahpData, selectedCountry, countries, herokuData };
};

const actions = {
  getInitialDataAction: Creators.getInitialData,
  setCountriesAction: Creators.setCountries,
  getCasesByCountryAction: Creators.getCasesByCountry
};

export default connect(mapStateToProps, actions)(Homepage);
