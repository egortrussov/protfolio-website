import React, { Component } from 'react'

export default class About extends Component {
    render() {
        const { extraClass } = this.props;
        console.log(extraClass)

        return (
            <div className={ 'about ' + extraClass }>
                about
            </div>
        )
    }
}
