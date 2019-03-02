// React imports
import React, {Component} from 'react';

// Internal imports
import RoomInputForm from "./RoomInputForm";

class Admin extends Component {
    render() {
        return (
            <div>
                <RoomInputForm rooms={this.props.rooms} updateRooms={(rooms) => this.props.updateRooms(rooms)}/>
            </div>
        );
    }
}

export default Admin;
