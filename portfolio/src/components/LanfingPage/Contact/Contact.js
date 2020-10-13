import React, { Component } from 'react'
import List from './List/List';

import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contactImage from '../../../images/landing/contact-image.svg';

export default class Contact extends Component {
    render() {

        const { extraClass } = this.props;

        return (
            <div className={ `contact ${ extraClass }` }>
                <div className="container">
                    <div className="top">
                        <div className="heading">
                            <h1>
                                <span>Contact</span><span>me</span>
                            </h1>
                        </div>
                    </div>
                    <div className="middle">
                        <span className="text">
                            If you
                        </span>
                        <List />
                        <span className="text">
                            Feel free to contact me via the links down below
                        </span>
                    </div>
                    <div className="links">
                        <div className="mail-link">
                            <FontAwesomeIcon 
                                icon={ faEnvelopeOpenText }
                                className="icon"
                            />
                            <span>
                                yegortr@gmail.com
                            </span>
                        </div>
                        <div className="icons-container">
                            <a href="https://instagram.com" className="icon">
                                <FontAwesomeIcon
                                    icon={ faInstagram }
                                />
                            </a>
                            <a href="https://twitter.com" className="icon">
                                <FontAwesomeIcon
                                    icon={ faTwitter }
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={ contactImage } alt=""/>
                </div>
            </div>
        )
    }
}
