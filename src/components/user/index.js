// React imports
import React, {Component} from 'react';


// Internal imports
import UserReservationPageInterface from "./UserReservationPageInterface/UserReservationPageInterface";
import ThirtyMinIntervalColumn from "./UserTimeTable/ThirtyMinIntervalColumn";
import Grid from '@material-ui/core/Grid';

class User extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={4}>
                <Grid item xs = {6}>
                <UserReservationPageInterface rooms={this.props.rooms}/>
                </Grid>
                <Grid item xs = {6}>
                <ThirtyMinIntervalColumn/>
                </Grid>
                </Grid>
            </div>
        );
    }
}

export default User;
