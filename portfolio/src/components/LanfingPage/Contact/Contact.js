import React, { Component } from 'react'
import List from './List/List';

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
                </div>
            </div>
        )
    }
}
