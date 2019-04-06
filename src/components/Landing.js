// React imports
import React, {Component} from 'react';

// Internal imports
// import Header from './header/index';
// import User from './user';
// import Admin from './admin';
//
// // Style imports
import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group';

import {
    Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page';
import Page from "./Page";
//import Button from "@material-ui/core/Button/Button";

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            locked: true,
        };
    }

    Animation = styled(CSSTransitionGroup)`
      ${({ transitionName }) => `.${transitionName}-enter`} {
        opacity: 0;
      }
    
      ${({transitionName}) => `.${transitionName}-leave`} {
        opacity: 1;
      }
    `

    route(locked) {
        switch(locked) {
            case false:
                return (<Page/>);
            case true:
            default:
                return (
                    <Hero
                        color="black"
                        backgroundImage={require("../assets/img/circ.gif")}
                        //backgroundImage="https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-Gif-Pictures.gif"
                        style={{display: 'flex'}}
                    >
                        <div style={{marginTop: 20}}>
                            <img src={require("../assets/img/title.png")} style={{width: 170}} alt="AAAA"/>
                            <div style={{width: '100%', flex: 1}}>
                                <CallToAction onClick={() => this.setState({locked: false})} style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} mt={3}>
                                    <div style={{color: 'white', marginTop: '-35px'}}> Login </div>
                                </CallToAction>
                            </div>
                        </div>
                    </Hero>
                );
        }
    }

    render() {
        return (
            <div>
                {this.route(this.state.locked)}
                <Animation
                    transitionName={"some-ID"}
                    transitionEnterTimeout={0.1}
                    transitionLeaveTimeout={2000}
                >
                    <div>some content</div>
                </Animation>
            </div>

        );
    }
}

export default Landing;
