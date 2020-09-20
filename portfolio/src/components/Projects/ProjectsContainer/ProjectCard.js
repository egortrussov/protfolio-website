import React, { Component } from 'react'

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="project-card">
                <div className="card-top">
                    <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" width="300" alt=""/>
                </div>
                <div className="card-bottom">
                    <div className="title">
                        Parrot
                    </div>
                    <div className="summary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, itaque?
                    </div>
                    <div className="stack">
                        icon, icon
                    </div>
                    <div className="btns">
                        
                    </div>
                </div>
            </div>
        )
    }
}
