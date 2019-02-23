// React imports
import React, {Component} from 'react';

// Internal imports
import Header from './header/index';
import User from './user';
import Admin from './admin';

// Style imports
import styled from 'styled-components';

const HeaderMargin = styled.div`
 margin-top: 2em;
 padding: 1em;
`;

class Page extends Component {
    constructor() {
        super();
        this.state = {
            selected: '',
        };
    }

    route(selection) {
        console.log("SEL" + selection);
        switch(selection) {
            case 'user':
                return <User/>;
            case 'admin':
                return <Admin/>;
            default:
                return <User/>;
        }
    }

    handleHeader(e, name) {
        this.setState({selected: name})
    }

    render() {
        return (
            <div>
                <Header onSelect={(e, name) => this.handleHeader(e, name)}/>
                <HeaderMargin >
                    {this.route(this.state.selected)}
                </HeaderMargin>
            </div>
        );
    }
}

export default Page;
