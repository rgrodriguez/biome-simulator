import React, { Component } from 'react';
import './App.css';
import Biome from './Biome/Biome';

class App extends Component {
  state = {
    bgIndex: 48
  }

  bgSwitchHandler = () => {
    this.setState({
      bgIndex: Math.floor(Math.random() * 16)
    })
  }

  render() {
    return (
      <div className="App">
        <Biome
          background={this.state.bgIndex}/>
        <img src={"cover.png"} height="350px" alt="citizenLost" onClick={this.bgSwitchHandler}></img>
      </div>
    );
  }
}

export default App;
