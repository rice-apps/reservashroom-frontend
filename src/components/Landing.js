// React imports
import React, {Component} from 'react';

// // Style imports
import styled from 'styled-components';

import {
    Hero, CallToAction
} from 'react-landing-page';
import Page from "./Page";

const FadeDiv = styled.div`
  width: 100%;
  height: 100%;
   
  ${({ visible }) => visible && `
    
    transition: opacity 0.5s;
    opacity: 1;
  `}
  
  ${({visible}) => !visible && `
    
    pointer-events:none;
    transition: opacity 0.5s;
    opacity: 0;
    position: fixed;
  `}
`;

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            locked: true,
        };
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
                            <img src={require("../assets/img/title2.png")} style={{width: 190, marginLeft: '-3px'}} alt="AAAA"/>
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
