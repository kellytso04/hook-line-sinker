import React from 'react';
import ReactDOM from 'react-dom';
import Cow from './Cow.jsx';

class CowList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCow: '',
    }

    this.handleDisplayClick = this.handleDisplayClick.bind(this);
  }

  handleDisplayClick(selectedCow) {
    this.props.onDisplayClick(selectedCow);
  }

  render() {
    return (
      <div>
        { this.props.cows.map( (cow, i) => (
          < Cow
            name={cow}
            handleDisplayClick={this.handleDisplayClick}
            key={i}
          />
        )) }
      </div>
    )
  }
}

export default CowList;