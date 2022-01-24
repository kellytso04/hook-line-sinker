import React from 'react';
import ReactDOM from 'react-dom';
import CowView from './CowView.jsx';
import CowList from './CowList.jsx';
import CowForm from './CowForm.jsx';

const volatileCows = [
  'Trixie Tip',
  'Sir Loin',
  'Portia House',
  'Phyllis Mignon',
  'Viola Shank',
  'Rich Eye',
  'Frank',
  'Kurt'
];

class LevelTwo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: volatileCows,
      selectedCow: volatileCows[0]
    }

    this.displayCow = this.displayCow.bind(this);
    this.addNewCow = this.addNewCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
  }

  displayCow( cow ) {
    this.setState({
      cows: this.state.cows,
      selectedCow: cow,
    })
  }

  addNewCow( cow ) {
    let hold = volatileCows.slice()
    hold.push(cow);

    this.setState({
      cows: hold
    }, () => {
      console.log('Added ', cow);
    });
  }

  deleteCow( cow ) {
    const index = volatileCows.indexOf(cow);

    let hold = volatileCows.slice();
    hold.splice(index, 1);

    this.setState({
      cows: hold,
      selectedCow: hold[0]
    }, () => {
      console.log('Removed ', cow);
    });
  }

  render() {
    return (
      <div>
        <CowView
          cows={this.state.cows}
          cow={this.state.selectedCow}
          onDeleteClick={this.deleteCow}
        />
        <div>
          <CowForm onSubmit={this.addNewCow} />
          <br></br>
          <CowList
            cows={this.state.cows}
            onDisplayClick={this.displayCow}
          />
        </div>
      </div>
    )
  }
}

export default LevelTwo;