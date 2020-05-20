import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { select, scaleTime, scaleLinear, extent, min, max, axisBottom, axisLeft } from 'd3';

const Canvas = ({ data: lineData, width: configuredWidth, height: configuredHeight, margin }) => {
  let element = React.createRef();
  let field = 'Confirmed'; // Confirmed key is always the maximum value of the scale

  useEffect(() => {
    select('svg#chart-canvas').remove();
    const width = configuredWidth - margin.left - margin.right;
    const height = configuredHeight - margin.top - margin.bottom;
    const svgdocument = select(element).append('svg').attr('id', 'chart-canvas');

    const svg = svgdocument
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // define x and y scales
    let x = scaleTime().range([0, width]);
    let y = scaleLinear().range([height, 0]);

    // set x and y scale domains
    x.domain(
      extent(lineData, function (d) {
        return new Date(d.Date);
      })
    );
    y.domain([
      min(lineData, function (d) {
        return d[field];
      }),
      max(lineData, function (d) {
        return d[field];
      })
    ]);

    // setup x axis
    let xAxisDefinition = axisBottom(x).ticks(5);
    let yAxisDefinition = axisLeft(y).ticks(5).tickSize(-width).tickFormat('');

    // add a tick at the top of the graph
    yAxisDefinition.tickValues(y.ticks(5).concat(y.domain()));

    // draw x axis
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxisDefinition);

    // draw y axis
    let yAxis = svg
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(0, 0)')
      .call(yAxisDefinition);

    // remove vertical y axis
    yAxis.select('.domain').remove();

    // make y axis ticks grey
    yAxis.selectAll('.tick').attr('color', 'lightgray');
  }, [lineData, configuredWidth, configuredHeight, margin, element, field]);

  return (
    <div
      className="element"
      ref={(node) => {
        element = node;
      }}
    ></div>
  );
};

Canvas.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.object.isRequired
};

export default Canvas;
