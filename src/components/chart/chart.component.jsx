import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Canvas from 'components/canvas/canvas.component';
import SVGLine from 'components/svg-line/svg-line.component';
import axios from 'axios';
import { colors } from 'theme';

import './chart-component.styles.scss';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      width: 0,
      height: 0
    };

    this.margin = { top: 40, right: 0, bottom: 80, left: 30 };

    this.canvas = React.createRef();
    this.gutter = 30; // this is constant bootstrap gutter
  }

  async componentDidMount() {
    console.log('didmoutn');
    const { country } = this.props;
    // get graph data
    await axios
      .get(`https://api.covid19api.com/total/dayone/country/${country}`)
      .then((response) => {
        let data = response.data;
        this.setState({ data }, () => {
          /**
           * Set the width after data array is populated bacause --
           * as long as data.length is 0 the canvas ref is not rendered, hence --
           * the canvas is undefined
           */
          this.setWidth();
        });
      });
  }

  setWidth = () => {
    this.setState({
      width: this.canvas.current.clientWidth,
      height: 500
    });
  };

  render() {
    const { data, width, height } = this.state;
    if (data.length === 0 || !this.props.country) return <Loader />;

    return (
      <div ref={this.canvas}>
        <div className="content-wrap-main">
          <p className="lead">Visualize Confirmed Cases Since Day-one</p>
        </div>
        <div className="chart-container">
          <Canvas data={data} width={width} height={height} margin={this.margin} />
          <SVGLine
            field="Confirmed"
            color={colors.totalCases}
            data={data}
            width={width}
            height={height}
            margin={this.margin}
          />
        </div>
      </div>
    );
  }
}

Chart.propTypes = {
  country: PropTypes.string
};

export default Chart;
