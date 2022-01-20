import React from 'react';

class Message extends React.Component {
  // Constructors are only used in class components, so get rid of this again!
  // But... where do we put this.state? 🤔
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
  }

  // TODO: Replace this lifecycle method with the appropriate hook!
  componentDidMount() {
    let randomIndex = Math.floor(Math.random() * this.props.samplePhrases.length);

    this.setState({
      message: this.props.samplePhrases[randomIndex];
    });
  }

  render() {
    return (
      <div className='message'>{this.state.message}</div>
    )
  }
}

export default Message;