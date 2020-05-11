import React from 'react';
import Loader from 'components/loader.component';
import CountrySelector from 'components/country-selector/country-selector.component';
import Time from 'components/time/time.component';
import Fields from 'components/fields/fields.component';
import { Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import './homepage.styles.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      country: 'World'
    };
  }

  componentDidMount() {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries').then((response) => {
      let data = response.data;
      this.setState({ data });
    });
  }

  handleSelect = (event) => {
    this.setState({ country: event });
  };

  render() {
    const { data, country } = this.state;
    if (data.length === 0) return <Loader />;
    // console.log('data', data);
    return (
      <Container fluid>
        <Jumbotron className="mt-3">
          <h1>Covid-19 Updates</h1>
          <Time />
          <p className="lead">
            This page updates everyday so you stay updated on the global situation regarding the
            Coronovirus pandemic
          </p>
          <CountrySelector data={data} handleSelect={this.handleSelect} selectedCountry={country} />
        </Jumbotron>
        <Fields country={country} data={data} />
        <footer className="py-3">
          <p className="text-muted">&copy; reddeguzman | {`v${process.env.REACT_APP_VERSION}`}</p>
        </footer>
      </Container>
    );
  }
}

export default Homepage;
