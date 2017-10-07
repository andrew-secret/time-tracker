import React from "react";

const ListView = props => {
  return (
    <div className="wrapper">
      ListView huhu
      <ul>
        {props.projects.map(project => (
          <li key={project.id}>
            <h1>{project.client}</h1>
            <p>{project.projectDescription}</p>
            <span>{project.timeElapsed}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
