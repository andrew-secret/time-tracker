import React from "react";
// import {Button} from './button/button';
import styles from "./Timer.scss";

const Timer = props => {
  return (
    <div className="wrapper">
      <span className="timer">
        {props.timer.hours}:
        {props.timer.minutes}:
        {props.timer.seconds}
      </span>
      <i className="material-icons">alarm</i>
      <i className="material-icons">play_circle_filled</i>
      <i className="material-icons">pause_circle_filled</i>
    </div>
  );
};

export default Timer;
