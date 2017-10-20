import React from 'react';
import styles from './ProjectList.scss';
import ProjectListItem from '../ProjectListItem/ProjectListItem';

const ProjectList = props => {
  
  return (
    <div className={styles.wrapper}>
      <ul className={styles.projectList}>
        {props.projects.map(project => (
          <ProjectListItem 
            addActiveClass={props.addActiveClass}
            hours={props.hours}
            minutes={props.minutes}
            seconds={props.seconds}
            key={project.key}
            active={project.active}
            client={project.client}
            timeElapsed={project.timeElapsed}
            projectDescription={project.projectDescription}
            earned={project.earned}
            {...project}/>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;