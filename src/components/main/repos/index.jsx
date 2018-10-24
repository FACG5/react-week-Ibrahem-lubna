import React, { Component } from "react";
import "./style.css";

class Repos extends Component {
  state = {};

  render() {
    const { repos } = this.props;
    return (
      <div className="repos">
      <div>
        <div className="repoHeader">
          <h4> Repositories list Of {this.props.name} </h4>
          <i onClick={this.props.hideRepos} className="fas fa-times" />
        </div>
        <hr />
        <div className="reposList">
          {repos.map(repo => (
            <div>
              <h4>
                <a href={repo.html_url}>{repo.name}</a>
              </h4>
              <h5>Language : {repo.language ? repo.language: 'Not Specified'}</h5>
              <h5>{repo.description ? repo.description : "No Description"}</h5>
              <hr/>
            </div>

          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Repos;
