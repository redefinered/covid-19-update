import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Canvas from 'components/canvas/canvas.component';
import SVGLine from 'components/svg-line/svg-line.component';
import CountrySelector from 'components/country-selector/country-selector.component';
import sortBy from 'lodash/sortBy';
import { Alert } from 'react-bootstrap';
// import World from 'components/world/world.component';
import Heading from 'components/heading/heading.component';

import { connect } from 'react-redux';
import { Creators } from 'modules/ducks/cases.actions';

import './chart-component.styles.scss';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      width: 0,
      height: 0
    };

    this.margin = { top: 40, right: 0, bottom: 20, left: 30 };

    this.canvas = React.createRef();
    this.gutter = 30; // this is constant bootstrap gutter
  }

  handleSelect = (event) => {
    this.props.setCountryAction(event.target.getAttribute('value'));
  };

  handleSearch = (event) => {
    this.setState({ searchString: event.target.value });
  };

  componentDidMount() {
    this.setWidth();

    // const countries = this.setUpCountriesData(this.props.herokuData);
    // this.props.setCountriesAction(countries);

    // this.props.getCasesByCountryAction(this.props.selectedCountry);
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;

    // set countries data
    if (prevProps.herokuData !== this.props.herokuData) {
      // this.props.getCasesByCountryAction(this.props.selectedCountry);
      const countries = this.setUpCountriesData(this.props.herokuData);
      this.props.setCountriesAction(countries);
    }

    // set cases
    if (prevProps.selectedCountry !== this.props.selectedCountry) {
      this.props.getCasesByCountryAction(this.props.selectedCountry);
    }
  }

  setUpCountriesData = (herokuData) => {
    let countries = [];
    countries = herokuData.map((d) => ({
      name: d.country,
      slug: d.country === 'USA' ? 'united-states' : d.country.toLowerCase().split(' ').join('-')
    }));
    // sort by country name
    countries = sortBy(countries, (c) => c.name);
    return countries;
  };

  setWidth = () => {
    this.setState({
      width: this.canvas.current.clientWidth,
      height: 500
    });
  };

  renderChart = ({ casesFromDayOne: data, width, height }) => (
    <div className="chart-container" style={{ height }}>
      <Canvas data={data} width={width} height={height} margin={this.margin} />
      <SVGLine field="Confirmed" data={data} width={width} height={height} margin={this.margin} />
      <SVGLine field="Recovered" data={data} width={width} height={height} margin={this.margin} />
      <SVGLine field="Deaths" data={data} width={width} height={height} margin={this.margin} />
    </div>
  );

  render() {
    const { searchString, width, height } = this.state;
    const { error, isFetching, selectedCountry, casesFromDayOne } = this.props;

    if (isFetching) return <Loader />;

    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
      <div ref={this.canvas}>
        <div className="content-wrap-main">
          {/* <span className="text-muted country-label">Overview of worldwide cases</span>
          <h2 className="mt-2">World</h2>
          <World /> */}
          <Heading small={`Country: ${selectedCountry}`} title="Data Visualization" />
          <CountrySelector
            isFetching={isFetching}
            handleSelect={this.handleSelect}
            selectedCountry={selectedCountry}
            handleSearch={this.handleSearch}
            searchString={searchString}
          />
        </div>
        {casesFromDayOne.length ? this.renderChart({ casesFromDayOne, width, height }) : null}
      </div>
    );
  }
}

Chart.propTypes = {
  // reducers
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  casesFromDayOne: PropTypes.array,
  selectedCountry: PropTypes.string,
  herokuData: PropTypes.array,
  // actions
  setCountryAction: PropTypes.func,
  getCasesByCountryAction: PropTypes.func,
  setCountriesAction: PropTypes.func
};

const mapStateToProps = (state) => {
  const { casesFromDayOne, countries } = state.casesReducer;
  return { casesFromDayOne, countries };
};

const actions = {
  setCountryAction: Creators.setCountry,
  setCountriesAction: Creators.setCountries,
  getCasesByCountryAction: Creators.getCasesByCountry
};

export default connect(mapStateToProps, actions)(Chart);
