import React from 'react';
import Timer from '../../components/Timer/Timer';
import SelectList from '../../components/SelectList/SelectList';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';

const TimerView = props => {
  return (
    <div className="wrapper">
        <Timer 
          timer={props.timer}
          startTimer={props.startTimer}
          stopTimer={props.stopTimer}
          reset={props.reset}
          hours={props.hours}
          isRunning={props.isRunning}
          minutes={props.minutes}
          seconds={props.seconds}/>
        <SelectList 
          clients={props.clients}
          currentClient={props.currentClient}
          handleChange={props.handleChange}/>
        <ProjectDescription />
    </div>
  );
};

export default TimerView;