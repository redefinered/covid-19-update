import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Canvas from 'components/canvas/canvas.component';
import SVGLine from 'components/svg-line/svg-line.component';
import CountrySelector from 'components/country-selector/country-selector.component';
import countryData from 'countries';
import axios from 'axios';
import find from 'lodash/find';

import './chart-component.styles.scss';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      data: [],
      width: 0,
      height: 0
    };

    this.margin = { top: 40, right: 0, bottom: 20, left: 30 };

    this.canvas = React.createRef();
    this.gutter = 30; // this is constant bootstrap gutter
  }

  async componentDidMount() {
    const { country } = this.props;
    this.getTotalDataByCountry(country);
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    if (prevProps.country !== this.props.country) {
      return this.getTotalDataByCountry(this.props.country);
    }
  }

  getCountrySlugFromData = (country) => {
    try {
      let c;
      c = find(countryData, (o) => {
        if (country === 'USA') return o.Country === 'United States of America';
        return o.Country === country;
      });
      if (c === undefined) return;
      return c.Slug;
    } catch (error) {
      this.setState({ data: [], isFetching: false });
      console.log(error.message);
    }
  };

  getTotalDataByCountry = async (country) => {
    const countrySlug = this.getCountrySlugFromData(country);
    this.setState({ data: [], isFetching: true });
    if (countrySlug === undefined) {
      this.setState({ isFetching: false });
      return;
    }
    const { data } = await axios.get(`https://api.covid19api.com/dayone/country/${countrySlug}`);
    this.setState({ data, isFetching: false }, () => {
      /**
       * Set the width after data array is populated bacause --
       * as long as data.length is 0 the canvas ref is not rendered, hence --
       * the canvas is undefined
       */
      this.setWidth();
    });
  };

  setWidth = () => {
    this.setState({
      width: this.canvas.current.clientWidth,
      height: 500
    });
  };

  render() {
    const { data, width, height, isFetching } = this.state;
    const { data: otherData, handleSelect, country, handleSearch, searchString } = this.props;

    return (
      <div ref={this.canvas}>
        <div className="content-wrap-main">
          <span className="text-muted country-label">{`Country: ${this.props.country}`}</span>
          <h2 className="mt-2">Data Visualization</h2>
          <CountrySelector
            data={otherData}
            handleSelect={handleSelect}
            selectedCountry={country}
            handleSearch={handleSearch}
            searchString={searchString}
          />
        </div>

        {isFetching ? (
          <Loader />
        ) : data.length === 0 || !this.props.country ? (
          <div className="content-wrap-main mt-3">
            <p>Abiguous or not enough data...</p>
          </div>
        ) : (
          <div className="chart-container" style={{ height }}>
            <Canvas data={data} width={width} height={height} margin={this.margin} />
            <SVGLine
              field="Confirmed"
              data={data}
              width={width}
              height={height}
              margin={this.margin}
            />
            <SVGLine
              field="Recovered"
              data={data}
              width={width}
              height={height}
              margin={this.margin}
            />
            <SVGLine
              field="Deaths"
              data={data}
              width={width}
              height={height}
              margin={this.margin}
            />
          </div>
        )}
      </div>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.array,
  country: PropTypes.string,
  handleSelect: PropTypes.func,
  handleSearch: PropTypes.func,
  searchString: PropTypes.string
};

export default Chart;
