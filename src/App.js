import React, { Component } from 'react';
import GraphBar from './GraphBar.js';
//import VoteButtons from './VoteButtons.js';

class App extends Component {

  constructor(props) {
        super(props);
        this.state = {
            vanillaCount: 0,
            chocolateCount: 0,
            strawberryCount: 0
        };
    }

  render() {
    return (
      <div className="App">
        <div className="AppContainer">

          <div className="Graph">
              <GraphBar name="Vanilla" height={this.state.vanillaCount} />
              <GraphBar name="Chocolate" height={this.state.chocolateCount} />
              <GraphBar name="Strawberry" height={this.state.strawberryCount} />
          </div>

          <div className="VoteButtons">
            <button id="vanillaButton" onClick={this.addVanillaVote.bind(this)}>Vanilla</button>
            <button id="chocolateButton" onClick={this.addChocolateVote.bind(this)}>Chocolate</button>
            <button id="strawberryButton" onClick={this.addStrawberryVote.bind(this)}>Strawberry</button>
          </div>

        </div>
      </div>
    );
  }

  addVanillaVote() {
    this.setState(prevState => ({ vanillaCount: prevState.vanillaCount + 1 }));
  };

  addChocolateVote() {
    this.setState(prevState => ({ chocolateCount: prevState.chocolateCount + 1 }));
  };

  addStrawberryVote() {
    this.setState(prevState => ({ strawberryCount: prevState.strawberryCount + 1 }));
  };
}

export default App;
