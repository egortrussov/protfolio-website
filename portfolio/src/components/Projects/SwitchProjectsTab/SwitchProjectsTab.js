import React, { Component } from 'react'

export default class SwitchProjectsTab extends Component {
    render() {

        const { changeProjectsType, type } = this.props;

        return (
            <div className="switch-menu">
                <div className="title">
                    Projects type:
                </div>
                <div className="btns-container">
                    <button className={ !type ? 'btn active' : 'btn' } onClick={ () => changeProjectsType(0) }>
                        <span>web dev.</span>
                    </button>
                    <button className={ type ? 'btn active' : 'btn' } onClick={ () => changeProjectsType(1) }>
                        <span>images</span>
                    </button>
                </div>
            </div>
        )
    }
}
