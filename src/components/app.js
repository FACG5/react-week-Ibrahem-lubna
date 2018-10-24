import React, { Component } from "react";
import Main from "./main";
import Header from "./header";
import "./style.css";
class App extends Component {
  state = {
    clicked: false
  };
  show = (value) => this.setState({ clicked: value });
  render() {
    return (
      <React.Fragment>
        <Header show={this.show} clicked={this.state.clicked}/>
        <Main show={this.show} clicked={this.state.clicked}/>
      </React.Fragment>
    );
  }
}

export default App;
