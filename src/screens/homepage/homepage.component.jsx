import React from 'react';
import Chart from 'components/chart/chart.component';
import NewCases from 'components/new-cases/new-cases.component';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import './homepage.styles.scss';

const { REACT_APP_VERSION, REACT_APP_GEOLOCATION_DB_API_KEY } = process.env;
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      country: null, // the user's country of origin
      newCases: [],
      searchString: ''
    };
    // this.canvas = React.createRef();
  }

  componentDidMount() {
    // get countries
    axios.get('https://api.covid19api.com/countries').then((response) => {
      let countries = response.data;
      this.setState({ countries });
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
                <NewCases data={newCases} country={country} />
              </Col>
              <Col lg="8">
                {country ? (
                  <Chart
                    data={newCases}
                    country={country}
                    handleSelect={this.handleSelect}
                    handleSearch={this.handleSearch}
                    searchString={searchString}
                  />
                ) : null}
              </Col>
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
