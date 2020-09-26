import React, { Component } from 'react'

import ProjectsContainer from './ProjectsContainer/ProjectsContainer'
import SwitchProjectsTab from './SwitchProjectsTab/SwitchProjectsTab'

import { ProjectsContext } from '../../context/ProjectsContext';
import ShowProjectOverlay from '../ShowProjectOverlay/ShowProjectOverlay';

export default class Projects extends Component {

    state = {
        type: 0, // 0 - web, 1 - images
        projects: [],
        isLoading: true,
        isProjectChosen: false,
        currProject: null,
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

    chooseProjectToDisplay(id) {
        const { projects } = this.state;

        let project = projects.find(prj => prj.id === id);

        this.setState({
            isProjectChosen: true,
            currProject: project
        })
    }    

    render() {

        const { type, projects, isProjectChosen, currProject } = this.state;

        return (
            <div className="page-container">
                <div className="heading with-pb">
                    <h1>
                        <span>My</span> <span>Projects</span>
                    </h1>
                </div>
                {
                    isProjectChosen ? (
                        <ShowProjectOverlay 
                            project={ currProject }
                        />
                    ) : <></>
                }
                <SwitchProjectsTab 
                    changeProjectsType={ (type) => this.changeProjectsType(type) }
                    type={ type }
                />
                <ProjectsContainer 
                    projects={ projects }
                    chooseProjectToDisplay={ (id) => this.chooseProjectToDisplay(id) }
                    currProject
                />
            </div>
        )
    }
}
