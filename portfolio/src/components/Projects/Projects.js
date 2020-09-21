import React, { Component } from 'react'

import ProjectsContainer from './ProjectsContainer/ProjectsContainer'
import SwitchProjectsTab from './SwitchProjectsTab/SwitchProjectsTab'

import { ProjectsContext } from '../../context/ProjectsContext';

export default class Projects extends Component {

    state = {
        type: 0, // 0 - web, 1 - images
    }

    changeProjectsType(typeToSet) {
        const { type } = this.state;

        if (type === typeToSet) 
            return;

        this.setState({
            type: typeToSet
        })
    }

    static contextType = ProjectsContext;

    componentDidMount() {
        console.log(this.context.getProjectById(1))
    }
    

    render() {

        const { type } = this.state;

        return (
            <div>
                <SwitchProjectsTab 
                    changeProjectsType={ (type) => this.changeProjectsType(type) }
                    type={ type }
                />
                <ProjectsContainer />
            </div>
        )
    }
}
