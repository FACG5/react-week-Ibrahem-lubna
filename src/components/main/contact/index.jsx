import "../userInfo/style.css";
import React, { Component } from "react";

class Contact extends Component {
  state = {
    imgUrl1: "https://avatars0.githubusercontent.com/u/34215823?v=4",
    imgUrl2: "https://avatars0.githubusercontent.com/u/26024284?v=4"
  };
  render() {
    return (
      <div className="info contact">
        <div>
          <div>
            <h3> Ibraheem Ali </h3>
            <img src={this.state.imgUrl1} alt="" />
          </div>
          <div>
            <h3> Lubna Abd </h3>
            <img src={this.state.imgUrl2} alt="" />
          </div>
        </div>
        <h4> Code Academy Students - Facg5</h4>
      </div>
    );
  }
}

export default Contact;
