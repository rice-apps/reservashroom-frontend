// React imports
import React, {Component} from 'react';

// // Style imports
import styled from 'styled-components';

import {
    Hero, CallToAction
} from 'react-landing-page';
import Page from "./Page";

const FullDiv = styled.div`
    position: absolute;
    width: 100%;
    overflow: hidden;
    margin: 0;
    z-index: 10;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    pointer-events:none;
`;

const FadeDiv = styled.div`
  width: 100%;
  height: 100%;
   
  ${({ visible }) => visible && `
    
    transition: opacity 3s;
    opacity: 1;
  `}
  
  ${({visible}) => !visible && `
    
    pointer-events:none;
    transition: opacity 3s;
    opacity: 0;
    position: fixed;
  `}
`;

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            locked: true,
            imgLoading: true
        };
    }

    render() {
        if (this.state.imgLoading) {
            return (
                <div>
                    <div style={{width: '100%', height: '100%', backgroundColor: '#0E224B'}}/>
                    <FullDiv>
                        <img style={{display: 'block', width: '100%'}} onLoad={() => this.setState({imgLoading: false})} src={require("../assets/img/circ2.gif")}/>
                    </FullDiv>
                </div>
            );
        } else {
            return (
                <div>
                    <FadeDiv visible={this.state.locked}>
                        <FullDiv>
                            <img style={{display: 'block', width: '100%'}} src={require("../assets/img/circF.gif")}/>
                        </FullDiv>
                        <Hero
                            color="black"
                            //backgroundImage={require("../assets/img/circT.gif")}
                            style={{display: 'flex', backgroundColor: '#0E224B'}}
                        >
                            <div style={{marginTop: 20}}>
                                <img src={require("../assets/img/title2.png")} style={{width: 160, marginLeft: '-3px'}}
                                     alt="AAAA"/>
                                <div style={{width: '100%', flex: 1}}>
                                    <CallToAction onClick={() => this.setState({locked: false})} style={{
                                        position: 'relative',
                                        left: '50%',
                                        transform: 'translateX(-50%)'
                                    }} mt={3}>
                                        <div style={{color: 'white', fontSize: 10, marginTop: '-40px'}}> Login</div>
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
}

export default Landing;
