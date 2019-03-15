import React, { Component } from 'react';
import { Home } from "./Home";
import { Sandbox } from "./Sanbox";
// import { Button } from "./Button";

class App extends Component {
  state = {
    screen: "home",
    userPick: null,
    compPick: null,
    userIsPrey: null,


  }

  setUserPick = (pick) => {
    this.setState({ userPick: pick });
  }

  setCompPick = () => {
    const pick = ["rock", "paper", "scissors"][Math.floor(Math.random(3))];
    this.setState({ compPick: pick });
  }

  // determine if user is prey
  // render message depending on result, and use setTimeout to display sandbox (if not a tie)
  // if its a tie, display the score screen instead.

  changeScreen = (screenName) => {
    this.setState({ screen: screenName });
  }


  render() {
    return (
      <div className="App">
        { this.state.screen === "home" 
          && <Home 
              changeScreen={this.changeScreen} 
              setCompPick={this.setCompPick}
            />
        }

        { this.state.screen === "sandbox" && <Sandbox />}
      </div>
    );
  }
}

export default App;
