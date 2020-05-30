import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/loader.component';
import Chart from 'components/chart/chart.component';
import Overview from 'components/overview/overview.component';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Creators } from 'modules/ducks/cases.actions';

import './homepage.styles.scss';

const { REACT_APP_VERSION } = process.env;
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  async componentDidMount() {
    await this.props.getInitialDataAction();
  }

  render() {
    const { error, isFetching, herokuData, selectedCountry } = this.props;

    if (isFetching) return <Loader />;

    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
      <Container fluid>
        <Row>
          <Col lg="10" className="main">
            <Row>
              <Col lg="4">
                <Overview country={selectedCountry} data={herokuData} />
              </Col>
              <Col lg="8">
                <Chart
                  error={error}
                  selectedCountry={selectedCountry}
                  isFetching={isFetching}
                  herokuData={herokuData}
                />
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

Homepage.propTypes = {
  // reducers
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  selectedCountry: PropTypes.string,
  herokuData: PropTypes.array,
  casesFromDayOne: PropTypes.array,
  // actions
  getInitialDataAction: PropTypes.func
};

const mapStateToProps = (state) => {
  const {
    error,
    isFetching,
    cases,
    country: selectedCountry,
    herokuAllStatus: herokuData,
    casesFromDayOne
  } = state.casesReducer;
  return { error, isFetching, cases, selectedCountry, herokuData, casesFromDayOne };
};

const actions = {
  getInitialDataAction: Creators.getInitialData
};

export default connect(mapStateToProps, actions)(Homepage);
