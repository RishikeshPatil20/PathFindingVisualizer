import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    
    // const extraClassName = isFinish
    //   ? "node-finish"
    //   : isStart
    //   ? "node-start"
    //   : isWall
    //   ? "node-wall"
    //   : "";
    // this is alternaive for ternary operator.
      let extraClassName = "";
      if (isFinish) {
        extraClassName = "node-finish";
      } else if (isStart) {
        extraClassName = "node-start";
      } else if (isWall) {
        extraClassName = "node-wall";
      }
    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        //Down this are component to handle mouse ,that is to make a wall.
        onMouseDown={() => onMouseDown(row, col)} // just when we press
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}
