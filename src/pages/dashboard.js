import React, { Component } from "react";
import withAuth from "../auth/with.auth";
import AuthHelperMethods from "../auth/auth.helper.methods";

import ProjectList from "./page.components/dashboard/project.list";
import ProjectForm from "./page.components/dashboard/project.form";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      projectToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditClick.bind(this);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);

    this.clearProjectToEdit = this.clearProjectToEdit.bind(this);
    this.getProjects = this.getProjects.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
  }

  Auth = new AuthHelperMethods();

  handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace("/login");
  };

  clearProjectToEdit() {
    this.setState({
      projectToEdit: {}
    });
  }

  handleEditClick(project) {
    this.setState({
      projectToEdit: project
    });
  }

  handleDeleteClick(project) {
    fetch(
      `https://capstone-portfolio-backend.herokuapp.com/projects/deletePortfolioItem/:id`,
      {
        method: "delete"
      }
    )
      .then(response => {
        this.setState({
          projects: this.state.project.filter(res => {
            return res._id !== project._id;
          })
        });

        return response.formData;
      })
      .catch(error => {
        console.log("HandleDeleteClick Error ", error);
      });
  }

  handleEditFormSubmission() {
    this.getProjects();
  }

  handleNewFormSubmission(project) {
    this.setState({
      projects: [project].concat(this.state.projects)
    });
    this.getPortfolioItems();
  }

  handleFormSubmissionError(error) {
    console.log("Handle Form Submission error ", error);
  }

  getProjects() {
    fetch(`https://capstone-portfolio-backend.herokuapp.com/projects/all`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          projects: [...response]
        });
      })
      .catch(error => {
        console.log("Error getting project: ", error);
      });
  }

  componentDidMount() {
    console.log("mounted");
    this.getProjects();
  }

  render() {
    return (
      <div>
        <h1 className="dashboardHeader">Dashboard</h1>
        <div className="project-manager-wrapper">
          <div className="left-column">
            <ProjectForm
              handleNewFormSubmisssion={this.handleNewFormSubmission}
              handleEditFormSubmission={this.handleEditFormSubmission}
              handleSuccessfulFormSubmission={
                this.handleSuccessfulFormSubmission
              }
              handleFormSubmissionError={this.handleFormSubmissionError}
              clearProjectToEdit={this.clearProjectToEdit}
              projectToEdit={this.state.projectToEdit}
            />
          </div>
          <div className="right-column">
            <ProjectList
              handleDeleteClick={this.handleDeleteClick}
              data={this.state.projects}
              handleEditClick={this.handleEditClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Dashboard);
