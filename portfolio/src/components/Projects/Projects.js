import React, { Component } from 'react'

import ProjectsContainer from './ProjectsContainer/ProjectsContainer'
import SwitchProjectsTab from './SwitchProjectsTab/SwitchProjectsTab'

import { ProjectsContext } from '../../context/ProjectsContext';

export default class Projects extends Component {

    state = {
        type: 0, // 0 - web, 1 - images
        projects: [],
        isLoading: true
    }

    changeProjectsType(typeToSet) {
        const { type } = this.state;

        if (type === typeToSet) 
            return;

        this.setState({
            type: typeToSet
        }, () => {
            return this.loadProjects()
        })
    }

    static contextType = ProjectsContext;

    componentDidMount() {
        this.loadProjects();
    }

    loadProjects() {
        const { type } = this.state;

        let projects = this.context.getProjects(type);
        console.log(projects)

        this.setState({
            isLoading: false,
            projects
        })
    }
    

    render() {

        const { type, projects } = this.state;

        return (
            <div className="page-container">
                <div className="heading with-pb">
                    <h1>
                        <span>My</span> <span>Projects</span>
                    </h1>
                </div>
                <SwitchProjectsTab 
                    changeProjectsType={ (type) => this.changeProjectsType(type) }
                    type={ type }
                />
                <ProjectsContainer 
                    projects={ projects }
                />
            </div>
        )
    }
}
