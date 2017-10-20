import React from 'react';
import styles from './ProjectListItem.scss';
import classnames from 'classnames';
import {getHours,
        getMinutes,
        getSeconds,
        partial} from '../../lib/timeHelper';



const ProjectListItem = props => {

  const projectListClasses = classnames(styles.projectListItem, {
    [styles.isActive]: props.active === true,
  });

  const handleToggle = partial(props.addActiveClass, props.id)

  return (
    <li className={projectListClasses} 
      key={props.id}
      onClick={handleToggle}
      active={props.active}>
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
