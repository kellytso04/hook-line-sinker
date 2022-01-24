import React, { useState, useEffect } from 'react';
import RefreshQuoteButton from './RefreshQuoteButton.jsx';

const Message = ( {samplePhrases} ) => {
  // We'll use setState to create a state variable and a state-setting method.
  // By default, the first message on the screen will be an empty string.
  const [message, setMessage] = useState('');

  useEffect(() => {
    refreshQuote();
  }, []);

  refreshQuote() {
    let randomIndex = Math.floor(Math.random() * this.props.samplePhrases.length);

    setMessage(samplePhrases[randomIndex]);
  }

  return (
    <div className='message'>
      {message}
      <RefreshQuoteButton refresh={refreshQuote} />
    </div>
  )
}

export default Message;