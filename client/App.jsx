// TODO: What else will we need to import from React?
import React from 'react';
import LevelOne from './levelOne/LevelOne.jsx';
import LevelTwo from './levelTwo/LevelTwo.jsx';


// TODO: Hmmmmmm, something's not right here.
class App extends React.Component {
  // TODO: Constructors are only used in class components. Get this out of my sight immediately.
  constructor(props) {
    super(props);

    this.state = {
      showLevelOne: false,
      showLevelTwo: true,
      showLevelThree: false
    };

    this.setShowLevelOne = this.setShowLevelOne.bind(this);
    this.setShowLevelTwo = this.setShowLevelTwo.bind(this);
    this.setShowLevelThree = this.setShowLevelThree.bind(this);
  }

  setShowLevelOne() {
    this.setState({
      showLevelOne: true,
      showLevelTwo: false,
      showLevelThree: false
    }, () => {
      console.log('Showing Level 1');
    });
  }

  setShowLevelTwo() {
    this.setState({
      showLevelOne: false,
      showLevelTwo: true,
      showLevelThree: false
    }, () => {
      console.log('Showing Level 2');
    });
  }

  setShowLevelThree() {
    this.setState({
      showLevelOne: false,
      showLevelTwo: false,
      showLevelThree: true
    }, () => {
      console.log('Showing Level 3');
    });
  }

  // TODO: When do we need a `render` function? When do we not?
  render() {
    return (
      <div className='app'>
        <button onClick={this.setShowLevelOne}>Show Level One</button>
        <button onClick={this.setShowLevelTwo}>Show Level Two</button>
        <button onClick={this.setShowLevelThree}>Show Level Three</button>

        { this.state.showLevelOne ? <LevelOne phrases={this.props.samplePhrases}/> : null }

        { this.state.showLevelTwo ? <LevelTwo /> : null }

        { this.state.showLevelThree ? <div id='level-three'>
          <h1>Level Three</h1>
        </div> : null }
      </div>
    )
  }
}

export default App;