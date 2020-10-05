import React, { Component, createRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUp, faEye, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectStack from '../ProjectStack/ProjectStack';

export default class ShowProjectOverlay extends Component {

    state = {
        isShown: false
    }

    constructor(props) {
        super(props);

        this.mainBlockEl = createRef();
        this.imageEl = createRef();
        this.descriptionEl = createRef();
    }

    componentDidMount() {
        let mainBlockEl = this.mainBlockEl.current;
        let imageEl = this.imageEl.current;
        let descriptionEl = this.descriptionEl.current;
        console.log(descriptionEl)

        mainBlockEl.classList.add('animated', 'show');
        // mainBlockEl.classList.add('animated');
        // imageEl.classList.add('animated', 'show');
        // descriptionEl.classList.add('animated', 'show');

        window.setTimeout(() => {
            // mainBlockEl.classList.remove('animated', 'show')
            imageEl.classList.add('animated', 'show');
            descriptionEl.classList.add('animated', 'show');

            // window.setTimeout(() => {
            //     imageEl.classList.remove('animated', 'show');
            //     imageEl.classList.add('displayed');
            //     descriptionEl.classList.remove('animated', 'show');
            // }, 1000)
        }, 500)
    }
    

    toggleInfoBlock() {
        let { isShown } = this.state;
        console.log(isShown)

        this.setState({
            isShown: !isShown
        })
    }

    closeOverlay() {
        let mainBlockEl = this.mainBlockEl.current;

        // mainBlockEl.classList.remove('show');
        mainBlockEl.classList.add('hide');

        window.setTimeout(() => {
            console.log('object')
            this.props.closeProjectOverlay();
        }, 500)
    }

    render() {

        const { isShown } = this.state;

        const { project, projectsNum } = this.props;

        return (
            <div ref={ this.mainBlockEl } className="show-project-overlay">
                <div className="container">
                    <div ref={ this.imageEl } className="image">
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
                        <button className="close-btn" onClick={ () => this.closeOverlay() }>
                            <FontAwesomeIcon 
                                className="icon"
                                icon={ faTimes }
                            />
                        </button>
                    </div> 
                    <div className={ `info ${ isShown ? 'shown' : 'hidden' }` }>
                        <div ref={ this.descriptionEl } className="description" onClick={ () => this.toggleInfoBlock() }>
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
