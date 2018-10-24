import React, { Component } from "react";
import "./style.css";

class Game1 extends Component {
  state = {
    start: false,
    interval: 0,
    score: 0,
    finish: false,
    timer: 10,
    length: [],
    lifes: 0,
    createInt: 0,
    checkInt: 0
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  counter = event => {
    if (this.state.start) {
      const idEvent = event.target.id;
      let array = this.state.length;
      array[idEvent] = "xx";
      this.setState({ score: this.state.score + 1, length: array });
    }
  };
  closeGame = () => {
    this.setState({
      start: false
    });
    clearInterval(this.createInt);
    clearInterval(this.checkInt);
    this.props.hideGame();
  };
  startGame = () => {
    this.setState({
      start: true,
      score: 0,
      finish: false,
      timer: 10,
      lifes: 3,
      length: []
    },()=>{
      if (this.state.start) {
        const game = this.refs.game;
        game.classList.remove("finish");
        this.createInt = setInterval(() => {
          const newArray = this.state.length.concat("x");
          this.setState({ length: newArray });
          const avatars = this.refs.avatars.children;
          const images = [...avatars];
          const top = this.getRandomInt(10, 0);
          const left = this.getRandomInt(10, 600);
          const duration = this.getRandomInt(5, 10);
          images[
            images.length - 1
          ].style.animation = `createBox ${duration}s linear infinite `;
          images[images.length - 1].style.margin = "40px";
          images[images.length - 1].style.top = `${top}px`;
          images[images.length - 1].style.left = `${left}px`;
        }, 2000);
  
        this.checkInt = setInterval(() => {
          const avatars = this.refs.avatars.children;
          const images = [...avatars];
          images.forEach(image => {
            if (this.state.length[image.id] === "x") {
              const bottom = image.offsetTop;
              if (bottom > 490) {
                this.setState({ lifes: this.state.lifes - 1 });
                if (this.state.lifes === 0) {
                  clearInterval(this.createInt);
                  clearInterval(this.checkInt);
                  this.setState({ start: false, finish: true, length: 0 });
  
                  game.classList.add("finish");
                }
              }
            }
          });
        }, 1000);
  
        if (this.state.timer === 0) {
          this.setState({ start: false, finish: true });
          game.classList.add("finish");
        }
      }
    });
  };
  render() {
    return (
      <div className="game" ref="game">
        <div>
          <div className="gameHeader">
            <h4> Game .. </h4>
            <div>
              <h4 className="startButton" onClick={this.startGame}>
                Start Game
              </h4>
              <h5>Your Score : {this.state.score}</h5>
              <h5>lifes : {this.state.lifes}</h5>
            </div>
            <i onClick={this.closeGame} className="fas fa-times" />
          </div>
          <hr />
        </div>
        <div ref="avatars">
          {this.state.length &&
            this.state.length.map((item, index) => {
              if (item === "x")
                return (
                  <img
                    onClick={this.counter}
                    id={index}
                    key={index}
                    src={this.props.imgUrl}
                    className="avatar"
                    alt=""
                  />
                );
              return null;
            })}
        </div>
      </div>
    );
  }
}

export default Game1;
