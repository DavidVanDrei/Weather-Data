import React, { Component } from "react";

class Progress extends Component {
  render() {
    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemax="100"
          style={{ width: this.props.progress }}
        />
      </div>
    );
  }
}

export default Progress;
