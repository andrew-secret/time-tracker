import React from 'react';
import styles from './ProjectList.scss';
import ProjectListItem from '../ProjectListItem/ProjectListItem';

const ProjectList = props => {
  console.log("isRunning", props.isRunning);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.projectList}>
        {props.projects.map(project => (
          <ProjectListItem 
            hours={props.hours}
            minutes={props.minutes}
            seconds={props.seconds}
            id={project.id}
            client={project.client}
            timeElapsed={project.timeElapsed}
            projectDescription={project.projectDescription}
            earned={project.earned}
            onClick={props.addActiveClass}/>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;