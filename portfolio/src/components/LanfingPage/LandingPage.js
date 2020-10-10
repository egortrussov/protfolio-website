import React, { Component, createRef } from 'react'
import About from './About/About';
import Contact from './Contact/Contact';

import Hero from './Hero/Hero'

export default class LandingPage extends Component {  

    state = {
        currentPage: 2,
        pageNum: 3,
        isAnimated: false,
        animProperties: {
            hide: null,
            show: null
        },
        extraClasses: ['hidden down', 'hidden down', 'shown']
    }

    componentDidMount() {
        window.addEventListener('mousewheel', (e) => {
            let { isAnimated, currentPage, pageNum, extraClasses } = this.state;

            if (isAnimated) 
                return false;
            
            let { deltaY } = e;
            if (deltaY < 0 && currentPage == 0 || deltaY > 0 && currentPage == pageNum - 1 || deltaY == 0) {
                // console.log('object')
                return false;
            }
            // if (deltaY < 0) console.log('Nooo')
            // console.log('yey')
            console.log(e)
            
            let animProperties = {}
            if (deltaY > 0) {
                // console.log('DOWNNNN')
                animProperties = {
                    hide: currentPage,
                    show: currentPage + 1,
                    dir: 1
                }
                extraClasses[currentPage] = 'hidden up';
                extraClasses[currentPage + 1] = 'shown';
                currentPage++;
            } else {
                animProperties = {
                    hide: currentPage,
                    show: currentPage - 1,
                    dir: -1
                }
                extraClasses[currentPage] = 'hidden down';
                extraClasses[currentPage - 1] = 'shown';
                currentPage--;
            } 

            window.setTimeout(() => {
                this.setState({
                    isAnimated: false
                })
            }, 1500)

            console.log(extraClasses)

            this.setState({
                isAnimated: true,
                currentPage,
                animProperties,
                extraClasses
            })
            
        })
    }
    

    render() {
        let { currentPage, isAnimated, animProperties, extraClasses } = this.state;

        console.log(extraClasses)

        return (
            <div className="landing">
                <div className="hero-container">
                    <Hero extraClass={ extraClasses[0] } />
                    
                    <About extraClass={ extraClasses[1] } />

                    <Contact extraClass={ extraClasses[2] } />
                </div>
            </div>
        )
    }
}
