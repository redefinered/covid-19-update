import React from 'react';
import Chart from 'components/chart/chart.component';
import NewCases from 'components/new-cases/new-cases.component';
import { Container, Col, Row } from 'react-bootstrap';
// import * as d3 from 'd3';
import axios from 'axios';
import './homepage.styles.scss';

const { REACT_APP_VERSION, REACT_APP_GEOLOCATION_DB_API_KEY } = process.env;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCases: [],
      country: null,
      searchString: ''
    };
    // this.canvas = React.createRef();
  }

  componentDidMount() {
    // console.log('xxxx', this.graphContainer.clientWidth);
    // get new cases today
    axios.get('https://coronavirus-19-api.herokuapp.com/countries').then((response) => {
      let newCases = response.data;
      this.setState({ newCases });
    });

    // get user location
    axios
      .get(`https://geolocation-db.com/json/${REACT_APP_GEOLOCATION_DB_API_KEY}`)
      .then((response) => {
        console.log('location', response.data);
        this.setState({ country: response.data.country_name || 'World' });
      });
  }

  handleSelect = (event) => {
    this.setState({ country: event.target.getAttribute('value') });
  };

  handleSearch = (event) => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    const { newCases, country, searchString } = this.state;

    return (
      <Container fluid>
        <Row>
          <Col lg="10" className="main">
            <Row>
              <Col lg="4">
                <NewCases
                  data={newCases}
                  handleSelect={this.handleSelect}
                  country={country}
                  handleSearch={this.handleSearch}
                  searchString={searchString}
                />
              </Col>
              <Col lg="8">{country ? <Chart country={country} /> : null}</Col>
            </Row>
          </Col>
          <Col lg="2" className="sidebar">
            {/* sidebar here */}
          </Col>
        </Row>
        <footer className="py-3">
          <p className="text-muted">&copy; reddeguzman | {`v${REACT_APP_VERSION}`}</p>
        </footer>
      </Container>
    );
  }
}

export default Homepage;
