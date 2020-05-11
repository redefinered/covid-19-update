import React from 'react';
import Loader from 'components/loader.component';
import Time from 'components/time/time.component';
import Fields from 'components/fields/fields.component';
import { Container, Jumbotron, Dropdown } from 'react-bootstrap';
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

  handleChange = (event) => {
    console.log(event.target.value);
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {country}
            </Dropdown.Toggle>

            <Dropdown.Menu onChange={this.handleChange}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Jumbotron>
        <Fields country={country} data={data} />
        <footer className="py-3">
          <p> &copy; SimpleSoft</p>
        </footer>
      </Container>
    );
  }
}

export default Homepage;
