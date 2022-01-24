import React from 'react';
import ReactDOM from 'react-dom';

class CowView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedDescription: '',
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.cow);
  }

  render() {
    return (
      <div>
        <div className='cow-details'>
          <h3>{this.props.cow}</h3>
        </div>
        <br></br>
        <button onClick={this.handleDeleteClick}>{`Delete ${this.props.cow}`}</button>
      </div>
    )
  }
}

export default CowView;