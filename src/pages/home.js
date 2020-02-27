import React, { Component } from 'react'
import ProjectList from './page.components/home/project.list'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedInStatus: props.loggedInStatus,
            projects: []
        }
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/capstone-portfolio-backend.herokuapp.com/projects/all')
            .then(res => res.json())
            .then(projects => {
                this.setState({
                    projects: projects
                })
            })
    }

    render() {
        return (
            <div className='home'>
                <div className='banner'>
                    <h1>
                        <span className="const">
                            const
                        </span>
                        <span className="bluefox">
                            bluefox
                        </span>
                        <span className="coding">
                            coding
                        </span>

                        <span className="arrow">
                            =>
                        </span>
                        
                        <span className="parens">
                            (<span className="dev">dev</span>)
                        </span>
                    </h1>
                </div>
                <div className='projects'>
                    <ProjectList data={this.state.projects}/>
                </div>
            </div>
        )
    }
}