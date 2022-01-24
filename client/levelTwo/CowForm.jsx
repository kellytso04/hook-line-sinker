import React from 'react';
import ReactDOM from 'react-dom';

class CowForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.name);
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Wanna see your cow here?</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleNameChange}
            type='text'
            placeholder='Name'
            value={this.state.name}
          />
          <button type='submit'>Add me!</button>
        </form>
      </div>
    )
  }
}

export default CowForm;