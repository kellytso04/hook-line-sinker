// You will notice that there are no TODO:s on this page.
// Try to refactor it from memory!
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric'}),
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>Today is {this.state.date} and it is currently {this.state.time}</div>
    )
  }
}

export default Clock;