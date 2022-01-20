// You will notice that there are no TODO:s on this page.
// Try to refactor it from memory!
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      time: this.state.date.toLocaleTime()
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
      date: new Date()
    });
  }

  render() {
    return (
      <div>Hi! Today is {this.state.date} and it is currently {this.state.time}</div>
    )
  }
}

export default Clock;