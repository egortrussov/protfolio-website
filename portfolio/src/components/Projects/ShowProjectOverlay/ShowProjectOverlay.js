import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUp, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectStack from '../ProjectStack/ProjectStack';

export default class ShowProjectOverlay extends Component {

    state = {
        isShown: false
    }

    toggleInfoBlock() {
        let { isShown } = this.state;
        console.log(isShown)

        this.setState({
            isShown: !isShown
        })
    }

    render() {

        const { isShown } = this.state;

        const { project, projectsNum } = this.props;

        return (
            <div className="show-project-overlay">
                <div className="container">
                    <div className="image">
                        <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt=""/>
                        <div className="move-btns">
                            <div className="move-btn">
                                <FontAwesomeIcon 
                                    icon={ faArrowLeft }
                                />
                            </div>
                            <div className="move-btn">
                                <FontAwesomeIcon 
                                    icon={ faArrowRight }
                                />
                            </div>
                        </div>
                    </div> 
                    <div className={ `info ${ isShown ? 'shown' : 'hidden' }` }>
                        <div className="description" onClick={ () => this.toggleInfoBlock() }>
                            <button className={ `toggle-block ${ isShown ? 'shown' : 'hidden' }` }>
                                <FontAwesomeIcon 
                                    className={ `icon ${ isShown ? 'shown' : 'hidden' }`}
                                    icon={ faArrowUp }
                                />
                            </button>
                            <div className="title">
                                { project.title }
                            </div>
                            <div className="summary">
                                { project.summary }
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
                            <div className="stack">
                                <ProjectStack 
                                    stack={ project.stack }
                                    hasLabel={ true }
                                />
                            </div>
                        </div>

                        .
                    </div>
                </div>
            </div>
        )
    }
}
