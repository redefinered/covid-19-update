import React from 'react';
import moment from 'moment';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
    };
  }

  tick = () => {
    this.setState({ time: moment() });
  };

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { time } = this.state;
    return (
      <div className="time">
        <p>{`As of ${time.format('dddd, D MMM YYYY')} ${time.format('hh:mm:ss A')}`}</p>
      </div>
    );
  }
}

export default Time;
