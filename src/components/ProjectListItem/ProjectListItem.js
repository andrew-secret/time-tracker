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
      <h3 className={styles.headline}>{props.client}</h3>
      <p>{props.projectDescription}</p>
    </li>
  );
};

export default ProjectListItem;
