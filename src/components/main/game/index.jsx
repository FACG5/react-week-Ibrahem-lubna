import React, { Component } from "react";
import "./style.css";

class Game extends Component {
  state = {
    start: false,
    interval: 0,
    score: 0,
    finish: false,
    timer:10, 
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  counter = () => {
    if (this.state.start) {
      this.setState({ score: this.state.score + 1 });
    }
  };
  closeGame = () => {
    this.setState({
      start: false
    });
    clearInterval(this.interval);
    this.props.hideGame();
  };
  startGame = () => {
    const avatar = this.refs.avatar;
    const game = this.refs.game;
    game.classList.remove('finish');
    this.setState({ interval: 0, start: true, score: 0, finish: false, timer:10 });
    let time = this.state.interval;
    this.interval = setInterval(() => {
      time++;
      const top = this.getRandomInt(100, 400);
      const left = this.getRandomInt(30, 600);
      avatar.style.top = `${top}px`;
      avatar.style.left = `${left}px`;
      this.setState({timer:this.state.timer-1})
      if (time === 10) {
        clearInterval(this.interval);
        this.setState({ start: false, finish: true });
        game.classList.add('finish');
      }
    }, 1000);
  };
  render() {
    return (
      <div className='game' ref='game'>
        <div>
          <div className="gameHeader">
            <h4> Game .. </h4>
            <div>
              <h4 className="startButton" onClick={this.startGame}> Start Game </h4>
              <h5>Your Score : {this.state.score}</h5>
              <h5>Time : {this.state.timer}</h5>
            </div>
            <i onClick={this.closeGame} className="fas fa-times" />
          </div>
          <hr />
        </div>
        <img hidden = {this.state.finish? true: false}
          onClick={this.counter}
          className="avatar1"
          src={this.props.imgUrl}
          alt=""
          ref="avatar"
        />

      </div>
    );
  }
}

export default Game;
