import React, { Component } from 'react'
import Logo from '../../../images/logos/react.png'

export default class ProjectStack extends Component {
    render() {

        const { stack, hasLabel } = this.props;

        return (
            <div className="project-stack">
                {
                    hasLabel ? (
                        <div className="label">
                            Technologies used: 
                        </div>
                    ) : <></>
                }
                <div className="img-container">
                    {
                        stack.map(item => {
                            let path = `./images/${ item.image }`;
                            return (
                                <img className="img" src={ require(`${ path }`) } alt="" />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
