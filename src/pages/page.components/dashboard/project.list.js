import React from "react";

const ProjectList = (props) => {
    if (props.data !== null) {
        const projectList = props.data.map(project => {
            return (
                <div key={project._id} className="project">
                    <div className="text-content">
                        <div className="name">{project.name}</div>
                        <div className="description">
                            <h4>{project.blogUrl}</h4>
                            <h5>{project.url}</h5>
                            <p>{project.description}</p>
                        </div>
                        <div className="actions">
                            <button className="actions" onClick={() => props.handleEditClick(project)}>Edit</button>
                            <button
                                className="actions"
                                onClick={() => props.handleDeleteClick(project)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

        return <div>{projectList}</div>
    } else return null;
}

export default ProjectList;