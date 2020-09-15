import React, { Component, createRef } from 'react'
import Parallax from 'parallax-js'

import Layer1 from '../../../images/landing/layer1.png'
import Layer2 from '../../../images/landing/layer2.png'
import Layer3 from '../../../images/landing/layer3.png'
import Layer4 from '../../../images/landing/layer4.png'
import Layer5 from '../../../images/landing/layer5.png'

export default class Hero extends Component {

    constructor(props) {
        super(props);

        this.sceneRef = createRef();
    }  

    componentDidMount() {
        let scene = this.sceneRef.current;

        let parallax = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true,
            limitY: 0
        });

    }

    render() {
        const { extraClass } = this.props;

        return (
            <div ref={ this.sceneRef } className={ 'hero ' + extraClass }>
                <div data-depth="0.1" className="layer layer5">
                    <img src={ Layer5 } alt=""/>
                </div>
                <div data-depth="0.13" className="layer layer4">
                    <img src={ Layer4 } alt=""/>
                </div>
                <div data-depth="0.2" className="logo">
                    <h1 data-depth="0.2">front-end developer <br/> Digital artist</h1>
                </div>
                <div data-depth="0.2" className="layer layer3">
                    <img src={ Layer3 } alt=""/>
                </div>
                <div data-depth="0.3" className="layer layer2">
                    <img src={ Layer2 } alt=""/>
                </div>
                <div data-depth="0.5" className="layer layer1">
                    <img src={ Layer1 } alt=""/>
                </div>
            </div>
        )
    }
}
