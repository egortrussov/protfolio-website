import React, { Component, createRef } from 'react'

import Hero from './Hero/Hero'

export default class LandingPage extends Component {  

    render() {
        return (
            <div className="landing">
                <Hero />
            </div>
        )
    }
}
