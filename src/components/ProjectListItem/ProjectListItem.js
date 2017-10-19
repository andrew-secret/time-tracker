import React from 'react';
import styles from './ProjectListItem.scss';
import classnames from 'classnames';
import {getHours,
        getMinutes,
        getSeconds} from '../../lib/timeHelper';



const ProjectListItem = props => {


// getSeconds = () => `0${props.timeElapsed % 60}`.slice(-2);
// getMinutes = () => `0${Math.floor(props.timeElapsed / 60)}`.slice(-2);
// getHours = () => `0${Math.floor(props.timeElapsed / 600)}`;


  const projectListClasses = classnames(styles.projectListItem, {
    [styles.isActive]: props.isActive === true,
  });
  return (
    <li className={projectListClasses} 
      key={props.id}
      onClick={props.onClick}
      isActive={props.isActive}>
        <span className={styles.timeElapsed}>
            {getHours(props.timeElapsed)}:
            {getMinutes(props.timeElapsed)}:
            {getSeconds(props.timeElapsed)}
        </span>
        <div className={styles.projectDetails}>
          <h3 className={styles.headline}>
            {props.client}
          </h3>
          <p className={styles.projectDescription}>
            {props.projectDescription}
          </p>
        </div>
        <div className={styles.earned}>
          {props.earned}€
        </div>
    </li>
  );
};

export default ProjectListItem;
