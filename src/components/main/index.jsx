import React, { Component } from "react";
import { getUserData } from "../../utils/gitHubFetch";
import UserInfo from "./userInfo";
import "./style.css";
import Contact from "./contact";

class Main extends Component {
  state = {
    loading: false
  };

  fetchApi = async () => {
    this.setState({ data: null, loading: true, clicked: false });
    const link = `https://api.github.com/users/${this.state.username}?access_token=288929944ce2bd9015f5b765ca08b257bc7e595e`;
    const data = await getUserData(link);
    this.props.show(true);
    this.setState({ data, loading: false});
    
  };
  handleOnChange = e => {
    const username = e.target.value;
    this.setState({ username });
  };
  render() {
    return (
      <div className="mainDiv">
        <div className="input">
          <i className="fab fa-github" />
          <input
            type="text"
            name="userName"
            placeholder="Github Username .. "
            onChange={this.handleOnChange}
          />
          <button
            onClick={this.fetchApi}
            className={this.state.loading ? "loading" : ""}
          >
            Search
          </button>
        </div>
        <div hidden={this.props.clicked? false: true }>
       <UserInfo data= { this.state.data ? {...this.state.data} : null}/>
        </div>
        <div hidden={this.props.clicked? true: false }>
       <Contact />
        </div>

      </div>
    );
  }
}

export default Main;
