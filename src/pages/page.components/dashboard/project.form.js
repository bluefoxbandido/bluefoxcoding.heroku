import React, { Component } from 'react'

export default class ProjectForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            url: "",
            blogUrl: "",
            editMode: false,
            apiUrl: `https://capstone-portfolio-backend.herokuapp.com/projects/create`,
            apiAction: "post"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
    }
    
    componentDidUpdate() {
        if(Object.keys(this.props.projectToEdit).length > 0) {
            const {
                _id,
                name,
                description,
                url,
                imageUrl
            } = this.props.projectToEdit;

            this.props.clearProjectToEdit();

            this.setState({
                id: _id,
                name: name || "",
                description: description || "",
                url: url || "",
                imageUrl: imageUrl || "",
                editMode: true,
                apUrl: `https://capstone-portfolio-backend.herokuapp.com/projects/${_id}`,
                apiAction: "put"
            });
        }
    }

    buildForm() {
        const data = {
            name: this.state.name,
            description: this.state.description,
            url: this.state.url,
            blogUrl: this.state.blogUrl
        };
        return data;
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        fetch(this.state.apiUrl, {
            method: this.state.apiAction,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                url: this.state.url,
                blogUrl: this.state.blogUrl
            })
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                name: "",
                description: "",
                url: "",
                blogUrl: "",
                editMode: false,
                apiUrl: `https://capstone-portfolio-backend.herokuapp.com/projects/create/:id`,
                apiAction: "post"
            });
            window.history.go();
        })
        .catch(error => {
            console.log("HandleSubmitError: ", error)
        })
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="project-form-wrapper">
                <div className="two-column">
                    <input
                        type="text"
                        name="name"
                        placeholder="Project Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Project Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="url"
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="blogUrl"
                        placeholder="Blog URL"
                        value={this.state.blogUrl}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="submit-button">
                    <button className="btn" type="submit">
                        Save
                    </button>
                </div>
            </form>
        );
    };
};