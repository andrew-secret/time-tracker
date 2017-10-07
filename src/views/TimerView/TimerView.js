import React from 'react';
import Button from '../../components/Button/Button';
import styles from './TimerView.scss';
import Timer from '../../components/Timer/Timer';
import SelectList from '../../components/SelectList/SelectList';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import {Link} from 'react-router-dom';


const TimerView = props => {
  return (
    <div className={styles.wrapper}>
        <Timer
          timer={props.timer}
          startTimer={props.startTimer}
          stopTimer={props.stopTimer}
          reset={props.reset}
          hours={props.hours}
          isRunning={props.isRunning}
          minutes={props.minutes}
          seconds={props.seconds}/>
          <div className={styles.inputSection}>
            <SelectList 
              clients={props.clients}
              currentClient={props.currentClient}
              handleClientChange={props.handleClientChange}/>
            <ProjectDescription 
              handleProjectDescription={props.handleProjectDescription}/>
            <Link to="/ListView">
            <Button
              label="save"
              onClick={props.handleSubmitProject}
              className={styles.saveButton}/>
            </Link>
        </div>
    </div>
  );
};

export default TimerView;
