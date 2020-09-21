import React, { Component, createContext } from 'react'

import { ProjectsData } from './database'

export const ProjectsContext = createContext();

export default class ProjectsContextProvider extends Component {

    state = {
        projects: [],
    }

    getProjects(type) {
        let projects = ProjectsData.filter((project) => project.type === type) 

        return projects;
    } 

    getProjectById(id) {
        let project = ProjectsData.filter(project => project.id === id);

        return project[0];
    }

    render() {
        
        return (
            <ProjectsContext.Provider 
                value={ {
                    ...this.state,
                    getProjects: (type) => this.getProjects(type),
                    getProjectById: (id) => this.getProjectById(id)
                } }
            >
                { this.props.children }
            </ProjectsContext.Provider>
        )
    }
}