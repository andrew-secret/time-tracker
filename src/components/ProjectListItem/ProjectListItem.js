import React from 'react';
import styles from './ProjectListItem.scss';
import classnames from 'classnames';



const ProjectListItem = props => {

  const projectListClasses = classnames(styles.projectListItem, {
    [styles.isActive]: props.isActive === true,
  });
  return (
    <li className={projectListClasses} 
      key={props.id}
      onClick={props.onClick}
      isActive={props.isActive}>
        <span className={styles.timeElapsed}>
            {props.hours}:
            {props.minutes}:
            {props.seconds}
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
