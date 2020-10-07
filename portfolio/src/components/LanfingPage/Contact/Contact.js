import React, { Component } from 'react'

export default class Contact extends Component {
    render() {

        const { extraClass } = this.props;

        return (
            <div className={ `contact ${ extraClass }` }>
                <div className="container">
                    Contact yo
                </div>
            </div>
        )
    }
}
