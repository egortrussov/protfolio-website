import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        const { extraClass } = this.props;
        console.log(extraClass)

        return (
            <div className={ 'about ' + extraClass }>
                <div className="container">
                    <div className="left">
                        <div className="heading">
                            <h1>
                                <span>About</span><span>me</span>
                            </h1>
                        </div>
                    </div> 
                    <div className="right">
                        <div className="info-box">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum illo facere saepe iure neque magnam aliquid accusantium voluptates beatae!
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link to="/projects">
                            <button className="btn">
                                <span>
                                    View projects
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
