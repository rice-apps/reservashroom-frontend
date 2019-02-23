// React imports
import React, {Component} from 'react';

// Internal imports
import OutlinedInputAdornments from "./UserReservationPageInterface/UserReservationPageInterface";
import ThirtyMinIntervalColumn from "./UserTimeTable/ThirtyMinIntervalColumn";

class User extends Component {
    render() {
        return (
            <div>
                <OutlinedInputAdornments/>
                <ThirtyMinIntervalColumn/>
            </div>
        );
    }
}

export default User;
