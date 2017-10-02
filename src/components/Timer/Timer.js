import React from "react";
import {Button} from '../button/button';
import styles from "./Timer.scss";

const Timer = props => {
  console.log('isRunning', props.isRunning);
  return (
    <div className="wrapper">
      <i className="material-icons">alarm</i>
      <span className="timer">
        {props.hours}:
        {props.minutes}:
        {props.seconds}
      </span>
      {props.isRunning === false ? (
        <Button
          label="start"
          icon="play_circle_filled"
          onClick={props.startTimer}/>
      ) : (
        <Button
          label="stop"
          icon="pause_circle_filled"
          onClick={props.stopTimer}/>
      )}
    </div>
  );
};

export default Timer;
