import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ShowProjectOverlay from '../../ShowProjectOverlay/ShowProjectOverlay';
import ProjectCard from './ProjectCard'

export default class ProjectsContainer extends Component {

    state = {
        
    }

    render() {

        const { projects } = this.props;

        return (
            <div className="projects-container">
                {
                    projects.map(project => {
                        return (
                            <ProjectCard 
                                project={ project } 
                                chooseProjectToDisplay={ (id) => this.props.chooseProjectToDisplay(id) }
                            />
                        )
                    })
                }
            </div>
        )
    }
}
