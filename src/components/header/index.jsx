import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  state = {};
  render() {
    return (
        <header>
            <ul>
                <li onClick={() => this.props.show(false)}> About </li>
            </ul>
        </header>
    );
  }
}

export default Header;
