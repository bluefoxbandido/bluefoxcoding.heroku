import React from "react";

const ProjectList = props => {
  const projectList = props.data.map(project => {
    return (
        <div key={project._id} className="project-item">
            <div className="text-content">
                <div className="name">
                    <h3>{project.name}</h3>
                </div>
                <div className="description">
                    <h5>{project.blogUrl}</h5>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
  });

  return (
      <div className="project-list">
          {projectList}
      </div>
  )
};

export default ProjectList;
