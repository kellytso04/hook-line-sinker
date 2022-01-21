// TODO: What else will we need to import from React?
import React from 'react';
import Message from './Message.jsx';
import Clock from './Clock.jsx';

// TODO: Hmmmmmm, something's not right here.
class App extends React.Component {
  // TODO: Constructors are only used in class components. Get this out of my sight immediately.
  constructor(props) {
    super(props);
  }

  // TODO: When do we need a `render` function? When do we not?
  render() {
    return (
      <div className='app'>
        <Message samplePhrases={this.props.samplePhrases} />
        <Clock />
      </div>
    )
  }
}

export default App;