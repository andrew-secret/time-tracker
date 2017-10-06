import React from "react";
import styles from "./ProjectDescription.scss";

const ProjectDescription = props => {
  console.log('isRunning', props.isRunning);
  return (
    <div className={styles.inputForm}>
    <label className={styles.label}>
        Task
    </label>
    <input className={styles.inputField} 
      type="text"
      onChange={props.handleProjectDescription}/>
    </div>
  );
};

export default ProjectDescription;
