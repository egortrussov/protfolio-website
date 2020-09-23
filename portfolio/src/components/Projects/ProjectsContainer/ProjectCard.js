import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default class ProjectCard extends Component {
    render() {

        const { project } = this.props;

        return (
            <div className="project-card">
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
                    </div>
                </div>
            </div>
        )
    }
}
