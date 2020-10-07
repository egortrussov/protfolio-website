import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom';

export default class BackLink extends Component {

    state = {
        isRedirect: false
    }
    
    goBack() {
        this.setState({
            isRedirect: true
        })
    }

    render() {
        const { isRedirect } = this.state;

        if (isRedirect) 
            return (
                <Redirect 
                    to={ this.props.link }
                />
            )

        return (
            <div className="back-link" onClick={ () => this.goBack() }>
                <FontAwesomeIcon 
                    className="icon"
                    icon={ faArrowLeft }
                />
                <span>Go back</span>
            </div>
        )
    }
}
