import React from "react";
import ProjectList from '../../components/ProjectList/ProjectList';
import styles from './ListView.scss';

const ListView = props => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headline}>
        Your tracked projects
      </h1>
      <ProjectList
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds} 
        projects={props.projects}
        addActiveClass={props.addActiveClass}
        isActive={props.isActive}/>
    </div>
  );
};

export default ListView;
