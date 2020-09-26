import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default class ProjectCard extends Component {
    render() {

        const { project } = this.props;

        return (
            <div className="project-card" onClick={ () => this.props.chooseProjectToDisplay(project.id) }>
                <div className="clip-path"></div>
                <div className="card-top">
                    <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" width="300" alt=""/>
                </div>
                <div className="card-bottom">
                    <div className="title">
                        { project.title }
                    </div>
                    <div className="summary">
                        { project.summary }
                    </div>
                    <div className="stack">
                        { project.stack[0].name }
                    </div>
                    <div className="btns">
                        <a href="" className="button">
                            <FontAwesomeIcon icon={ faEye } />
                        </a>
                        {
                            project.type === 0 && project.github ? (
                                <a href={ project.github } className="button" target="_blank">
                                    <FontAwesomeIcon  icon={ faGithub } />
                                </a>
                            ) : <></>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
