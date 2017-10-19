import React from "react";
import Button from '../Button/Button';
import styles from "./Timer.scss";
import {getHours,
        getMinutes,
        getSeconds} from '../../lib/timeHelper';

const Timer = props => {

  console.log('isRunning', props.isRunning);
  return (
    <div className={styles.timer}>
      <i className="material-icons">alarm</i>
      <label className={styles.timeLabel}>
        total time
      </label>
      <span className={styles.currentTime}>
        {getHours(props.timeElapsed)}:
        {getMinutes(props.timeElapsed)}:
        {getSeconds(props.timeElapsed)}
      </span>
      <Button
        label=""
        icon="timer_off"
        className={styles.timerOffButton}
        onClick={props.reset}/>
      {props.isRunning === false ? (
        <Button
          label=""
          className={styles.circleButton}
          icon="play_arrow"
          onClick={props.startTimer}/>
      ) : (
        <Button
          label=""
          className={styles.circleButton}
          icon="pause"
          onClick={props.stopTimer}/>
      )}
    </div>
  );
};

export default Timer;
