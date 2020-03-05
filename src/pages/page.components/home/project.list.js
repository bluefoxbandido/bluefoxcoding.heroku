import React from "react";
import { NavLink } from "react-router-dom";

const ProjectList = props => {
  const projectList = props.data.map(project => {
    return (
        <NavLink key={project._id} className="project-item" to={project.blogUrl}>
            <div className="text-content">
                <div className="name">
                    <h3>{project.name}</h3>
                </div>
                <div className="description">
                    <h5>{project.url}</h5>
                    <p>{project.description}</p>
                </div>
            </div>
        </NavLink>
    );
  });

  return (
      <div className="project-list">
          {projectList}
      </div>
  )
};

export default ProjectList;
