import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

export default class ProjectsContainer extends Component {

    render() {

        const { projects } = this.props;

        return (
            <div className="projects-container">
                {
                    projects.map(project => {
                        return (
                            <ProjectCard project={ project } />
                        )
                    })
                }
                {
                    projects.map(project => {
                        return (
                            <ProjectCard project={ project } />
                        )
                    })
                }
                {
                    projects.map(project => {
                        return (
                            <ProjectCard project={ project } />
                        )
                    })
                }
            </div>
        )
    }
}
