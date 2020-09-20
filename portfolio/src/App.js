import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './components/LanfingPage/LandingPage'
import Projects from './components/Projects/Projects'

import './styles/main.css'
import './styles/LandingPage/LandingPage.css'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/projects" component={ Projects } />
                </Switch>
            </BrowserRouter>
        )
    }
}
