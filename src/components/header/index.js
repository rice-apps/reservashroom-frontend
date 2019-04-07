// React imports
import React, {Component} from 'react';

// Style imports
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const HeaderBox = styled.div`
  background-color: #3b3a36;
  padding: 0.5em;
`;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderBox>
                <Button name='user' style={{color: "white"}} onClick={(e) => this.props.onSelect(e, 'user')}>User</Button>
                <Button name='admin' style={{color: "white"}} onClick={(e) => this.props.onSelect(e, 'admin')}>Admin</Button>
            </HeaderBox>
        );
    }
}

export default Header;
