import React, { Component } from "react";
import Progress from "./Progress";
import Modal from "react-modal";

class Rain extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
      showModal: false,
      intensity: ".125",
      time: "1"
    };
    this.addWater = this.addWater.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    this.setState({ intensity: event.target.value });
  }

  handleChange(event) {
    this.setState({ time: event.target.value });
    console.log("Time changed! " + this.state.time);
  }

  openModal() {
    this.setState(prevState => {
      return {
        showModal: true
      };
    });
  }

  addWater(event) {
    this.setState(prevState => {
      console.log("progress: " + prevState.progress);
      console.log("time: " + prevState.time);
      console.log("intensity: " + prevState.intensity);
      console.log(parseInt(prevState.time, 10));
      return {
        showModal: false,
        progress:
          prevState.progress +
          parseFloat(prevState.time, 10) * parseFloat(prevState.intensity, 10)
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.progress}</h1>
        <Progress progress={this.state.progress} />
        <button onClick={this.openModal}>Water!</button>
        <Modal isOpen={this.state.showModal} ariaHideApp={false}>
          <form onSubmit={this.addWater}>
            <label>
              Water on
              <select
                value={this.state.intensity}
                onChange={this.handleValueChange}
              >
                <option value=".125">Low (1/8" in 15 mins)</option>
                <option value=".5">Medium (1/2" in 15 mins)</option>
                <option value="1">High (1" in 15 mins)</option>
              </select>
              For
              <select value={this.state.time} onChange={this.handleChange}>
                <option value="1">15 minutes</option>
                <option value="2">30 minutes</option>
                <option value="4">60 minutes</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default Rain;
