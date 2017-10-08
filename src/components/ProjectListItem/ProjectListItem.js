import React from "react";
import styles from "./ProjectListItem.scss";


const ProjectListItem = props => {
  return (
    <li className={styles.projectListItem} key={props.id}>
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
