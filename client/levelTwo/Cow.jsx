import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDisplayClick = this.handleDisplayClick.bind(this);
  }

  handleDisplayClick() {
    this.props.handleDisplayClick(this.props.name);
  }

  render() {
    return (
      <div className='cow-details'>
        {this.props.name}
        <br></br>
        <button onClick={this.handleDisplayClick} className='display-button'>✨ Show me off</button>
        <br></br>
      </div>
    )
  }
}

export default Cow;