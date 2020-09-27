import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default class ShowProjectOverlay extends Component {
    render() {

        const { project, projectsNum } = this.props;

        return (
            <div className="show-project-overlay">
                <div className="container">
                    <div className="image">
                        <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt=""/>
                    </div> 
                    <div className="info">
                        <div className="description">
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
                </div>
            </div>
        )
    }
}
