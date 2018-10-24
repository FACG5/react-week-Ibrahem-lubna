import React, { Component } from "react";
import { getUserData } from "../../../utils/gitHubFetch";
import "./style.css";
import Repos from "../repos";
import Game from '../game';
import Game1 from '../game1';


class UserInfo extends Component {
  state = {
    repos: [],
    showRepos: false,
    showGame: false,
    showGame1: false,
  };

  hideRepos = () => {
    this.setState({ showRepos: false });
  };
  showGame = () => {
    this.setState({ showGame: !this.state.showGame});
  };
  showGame1 = () => {    
    this.setState({ showGame1: !this.state.showGame1});
  };
  getRepos = async link => {
    const link1 = link+'?access_token=288929944ce2bd9015f5b765ca08b257bc7e595e'
    const repos = await getUserData(link1);
    this.setState({ repos, showRepos: true });
  };
  render() {
    return (
      <div className="info">
        {this.props.data ? (
          <React.Fragment>
            <img src={this.props.data.avatar_url} alt="" />
            <h3>
              <a href={this.props.data.html_url}> {this.props.data.login} </a>
            </h3>
            <h4 onClick={() => this.getRepos(this.props.data.repos_url)}>
              Show Repos
            </h4>
            <h4 onClick={this.showGame}>
              Play a Game 1
            </h4>
            <h4 onClick={this.showGame1}>
              Play a Game 2
            </h4>
            {this.state.showGame && <Game imgUrl = { this.props.data.avatar_url }hideGame = {this.showGame} />}
            {this.state.showGame1 && <Game1 imgUrl = { this.props.data.avatar_url }hideGame = {this.showGame1} />}

            {this.state.showRepos ? <Repos name = {this.props.data.login} repos = {this.state.repos} hideRepos={this.hideRepos} /> : null}
          </React.Fragment>
        ) : (
          <h1>User Not Found ! </h1>
        )}
      </div>
    );
  }
}

export default UserInfo;
