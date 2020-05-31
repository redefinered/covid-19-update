import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Canvas from 'components/canvas/canvas.component';
import SVGLine from 'components/svg-line/svg-line.component';
import CountrySelector from 'components/country-selector/country-selector.component';
import { Alert } from 'react-bootstrap';
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

    this.margin = { top: 40, right: 0, bottom: 20, left: 0 };

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
  }

  setWidth = () => {
    this.setState({
      width: this.canvas.current.clientWidth,
      height: 400
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

    const alert = (
      <Alert className="mt-3" variant="warning">
        No data
      </Alert>
    );

    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
      <div ref={this.canvas}>
        <Heading small="What the curve looks like" title="Data Visualization" />
        <CountrySelector
          isFetching={isFetching}
          handleSelect={this.handleSelect}
          selectedCountry={selectedCountry}
          handleSearch={this.handleSearch}
          searchString={searchString}
        />
        {!isFetching ? (
          casesFromDayOne.length ? (
            this.renderChart({ casesFromDayOne, width, height })
          ) : (
            alert
          )
        ) : (
          <Loader />
        )}
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
  setCountryAction: PropTypes.func
};

const mapStateToProps = (state) => {
  const { casesFromDayOne } = state.casesReducer;
  return { casesFromDayOne };
};

const actions = {
  setCountryAction: Creators.setCountry
};

export default connect(mapStateToProps, actions)(Chart);
