import React from 'react';
import Clock from './Clock.jsx';
import Message from './Message.jsx';
import RefreshQuoteButton from './RefreshQuoteButton.jsx';

const LevelOne = (props) => (
  <div id='level-one'>
    <h1>Level One: Quote Dropper and a clock</h1>
    <Message samplePhrases={props.phrases} />
    <Clock />
  </div>
)

export default LevelOne;