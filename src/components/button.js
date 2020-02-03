import React, { Component } from "react";

export class Button extends Component {
  btnstyle = {
    width: this.props.width || "24%",
    height: "70px",
    margin: "1px",
    fontSize: "1.5rem",
    backgroundColor: this.props.orange || "#6c757d"
  };

  
  render() {
    return (
      <button
        id={this.props.ops}
        className="btn btn-secondary rounded-0"
        style={this.btnstyle}
        onClick={
          this.props.label === "="
            ? this.props.calc
            :this.props.label === 'AC'
            ? this.props.clear
            : this.props.createStatement
        }
        key={this.props.label}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
