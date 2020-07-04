import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Survey Report
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
