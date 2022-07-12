import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  }
  
  evaluateAnswer = (isAnswerCorrect) => {
    if(isAnswerCorrect) {
        this.setState((currentState) => ({
          numCorrect: currentState.numCorrect + 1
        }));
    }
    
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Find the Sum</h1>
        </header>
        <Game
			appState = {this.state}
			evaluateAnswer = {this.evaluateAnswer}
		/>
      </div>
    );
  }
}

export default App;
