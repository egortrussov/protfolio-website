import React, { Component } from 'react'

export default class About extends Component {
    render() {
        const { extraClass } = this.props;

        return (
            <div className={ 'about ' + extraClass }>
                about
            </div>
        )
    }
}
