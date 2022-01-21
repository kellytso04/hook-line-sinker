import React from 'react';
import RefreshQuoteButton from './RefreshQuoteButton.jsx';

class Message extends React.Component {
  // Constructors are only used in class components, so get rid of this again!
  // But... where do we put this.state? 🤔
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }

    this.refreshQuote = this.refreshQuote.bind(this);
  }

  // TODO: Replace this lifecycle method with the appropriate hook!
  componentDidMount() {
    this.refreshQuote();
  }

  // TODO: Refactor this to use a stateSetter function instead of `this.setState`
  refreshQuote() {
    let randomIndex = Math.floor(Math.random() * this.props.samplePhrases.length);

    this.setState({
      message: this.props.samplePhrases[randomIndex]
    })
  }

  render() {
    return (
      <div className='message'>
        {this.state.message}
        <RefreshQuoteButton refresh={this.refreshQuote}/>
      </div>
    )
  }
}

export default Message;