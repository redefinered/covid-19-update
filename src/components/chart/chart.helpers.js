export const drawChart = (config) => {
  const key = 'Confirmed';
  const { data: lineData, width: configuredWidth, height: configuredHeight } = config;
  console.log('data', lineData);
  const margin = { top: 40, right: 0, bottom: 80, left: 60 };
  const width = configuredWidth - margin.left - margin.right;
  const height = configuredHeight - margin.top - margin.bottom;

  const svgdocument = d3.select(this.canvas).append('svg');

  const svg = svgdocument
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('style', { background: 'black' })
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  let x = d3.scaleTime().range([0, width]);
  let y = d3.scaleLinear().range([height, 0]);
  x.domain(
    d3.extent(lineData, function (d) {
      return new Date(d.Date);
    })
  );
  y.domain([
    d3.min(lineData, function (d) {
      return d[key];
    }),
    d3.max(lineData, function (d) {
      return d[key];
    })
  ]);

  // at this point, xscale and yscale are setup
  // console.log('day one: ', x.invert(0));

  // draw axes
  let xAxis = d3.axisBottom(x).ticks(5);
  let yAxis = d3.axisLeft(y).ticks(5);

  svg.append('g').attr('class', 'x axis').attr('transform', `translate(0, ${height})`).call(xAxis);

  svg.append('g').attr('class', 'y axis').attr('transform', 'translate(0, 0)').call(yAxis);

  // draw lines
  let line = d3
    .line()
    .defined(function (d) {
      return d[key]; // return true if Confirmed ket is defined or not equal to null
    })
    .x(function (d) {
      return x(new Date(d.Date));
    })
    .y(function (d) {
      return y(d[key]);
    });

  svg
    .append('path')
    .datum(lineData)
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('stroke-width', 2)
    .attr('d', line);
};
