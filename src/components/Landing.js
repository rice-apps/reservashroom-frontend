// React imports
import React, {Component} from 'react';

// Internal imports
// import Header from './header/index';
// import User from './user';
// import Admin from './admin';
//
// // Style imports
import styled from 'styled-components';
//import CSSTransitionGroup from 'react-transition-group';

import {
    Hero, CallToAction
} from 'react-landing-page';
import Page from "./Page";
//import Button from "@material-ui/core/Button/Button";

const FadeDiv = styled.div`
  width: 100%;
  height: 100%;
   
  ${({ visible }) => visible && `
    position: absolute;
    transition: opacity 0.5s;
    opacity: 1;
  `}
  
  ${({visible}) => !visible && `
    position: fixed;
    pointer-events:none;
    transition: opacity 0.5s;
    opacity: 0;
  `}
`;

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            locked: true,
        };
    }

    route(locked) {
        switch(locked) {
            case false:
                return (
                    <FadeDiv visible={!this.state.locked}>
                        <Page/>
                    </FadeDiv>
                );
            case true:
            default:
                return (
                    <FadeDiv visible={this.state.locked}>
                        <Hero
                            color="black"
                            backgroundImage={require("../assets/img/circ.gif")}
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
                    </FadeDiv>
                );
        }
    }

    render() {
        return (
            <div>
                <FadeDiv visible={this.state.locked}>
                    <Hero
                        color="black"
                        backgroundImage={require("../assets/img/circ.gif")}
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
                </FadeDiv>
                <FadeDiv visible={!this.state.locked}>
                    <Page/>
                </FadeDiv>
            </div>

        );
    }
}

export default Landing;
