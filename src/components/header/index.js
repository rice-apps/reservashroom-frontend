// React imports
import React, {Component} from 'react';

// Style imports
import Button from '@material-ui/core/Button';

const HeaderBox = styled.div`
  background-color: Aquamarine;
  padding: 0.5em;
`;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderBox>
                <Button name='user' onClick={(e) => this.props.onSelect(e, 'user')}>User</Button>
                <Button name='admin' onClick={(e) => this.props.onSelect(e, 'admin')}>Admin</Button>
            </HeaderBox>
        );
    }
}

export default Header;
