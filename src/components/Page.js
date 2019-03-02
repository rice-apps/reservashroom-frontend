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
            rooms: [],
        };
    }

    route(selection) {
        console.log("SEL" + selection);
        switch(selection) {
            case 'user':
                return <User rooms={this.state.rooms} updateRooms={(rooms) => this.updateRooms(rooms)}/>;
            case 'admin':
                return <Admin rooms={this.state.rooms} updateRooms={(rooms) => this.updateRooms(rooms)}/>;
            default:
                return <User rooms={this.state.rooms} updateRooms={(rooms) => this.updateRooms(rooms)}/>;
        }
    }

    updateRooms(rooms) {
        this.setState({rooms: rooms});
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
