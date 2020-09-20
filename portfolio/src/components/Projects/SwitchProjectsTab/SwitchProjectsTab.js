import React, { Component } from 'react'

export default class SwitchProjectsTab extends Component {
    render() {

        const { changeProjectsType, type } = this.props;

        return (
            <div className="switch-menu">
                Project type: 
                <div className="btns-container">
                    <button className={ !type ? 'active' : '' } onClick={ () => changeProjectsType(0) }>Web dev.</button>
                    <button className={ type ? 'active' : '' } onClick={ () => changeProjectsType(1) }>images</button>
                </div>
            </div>
        )
    }
}
