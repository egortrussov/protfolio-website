import React, { Component } from 'react'
import Logo from '../../../images/logos/react.png'

export default class ProjectStack extends Component {
    render() {

        const { stack } = this.props;

        return (
            <div className="project-stack">
                {
                    stack.map(item => {
                        let path = `./images/${ item.image }`;
                        return (
                            <img className="img" src={ require(`${ path }`) } alt="" />
                        )
                    })
                }
            </div>
        )
    }
}
