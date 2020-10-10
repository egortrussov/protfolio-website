import React, { Component } from 'react'

export default class List extends Component {

    state = {
        options: [
            'Want a professional static ReactJS website',
            '..or a powerful dynamic website with fully-functioned frontend & backend and a secure database connection',
            '..or want your image get photoshoped by an expert',
            "..or you're just a girl looking for a hot boyfriend"
        ]
    }

    render() {

        const { options } = this.state;

        return (
            <div className="list-container">
                {
                    options.map(option => (
                        <div className="option">
                            { option }
                        </div>
                    ))
                }
            </div>
        )
    }
}
