import React, { Component } from 'react';

class Game extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    proposedAnswerVariation: Math.floor(Math.random() * 3)
  }
  
  updateQuestion = () => {
    this.setState({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100),
      proposedAnswerVariation: Math.floor(Math.random() * 3)
    })
  }

  checkAnswer = (event) => {
    const evaluateAnswer = this.props.evaluateAnswer;
    const {value1, value2, value3, proposedAnswerVariation} = this.state;
    
    const actualAnswer = value1 + value2 + value3;
    const buttonClicked = event.target.name;
    const proposedAnswer = proposedAnswerVariation + actualAnswer;
    
    let isAnswerCorrect = false;
    
    if((actualAnswer === proposedAnswer && buttonClicked === 'true') ||
      (actualAnswer !== proposedAnswer && buttonClicked === 'false')) {
        isAnswerCorrect = true;
    }
    
    evaluateAnswer(isAnswerCorrect);
    this.updateQuestion();
  }
  
  render() {
    const appState = this.props.appState;
    const {value1, value2, value3, proposedAnswerVariation} = this.state;
    const proposedAnswer = proposedAnswerVariation + value1 + value2 + value3;
        
    return (
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          
          <button onClick = {this.checkAnswer} name = "true">
          	True
          </button>
          <button onClick = {this.checkAnswer} name = "false">
          	False
          </button>
          
          <p className="text">
            Your Score: {appState.numCorrect}/{appState.numQuestions}
          </p>
        </div>
    );
  }
}

export default Game;
