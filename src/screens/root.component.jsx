import React from 'react';
import PropTypes from 'prop-types';
import HomePage from 'screens/homepage/homepage.component';
import { connect } from 'react-redux';

const RootComponent = ({ isLoading }) => {
  if (isLoading) return <p>Getting the app ready...</p>;
  return <HomePage />;
};

RootComponent.propTypes = {
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => {
  const { isLoading } = state.appReducer;
  return { isLoading };
};

export default connect(mapStateToProps, null)(RootComponent);
