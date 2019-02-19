// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

export default class CalendarRow extends Component {
    render() {
        const days = Array.of("Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday");
        return (
            <Grid container spacing={16} style={{marginLeft: 100}}>
                {days.map(day => (
                    <Tooltip title={day + " " + this.props.time}>
                        <Grid item xs={1.4} style={{border:"solid 1px", fontSize: 6, backgroundColor: 'white',
                            width: 100, height: 20, textAlign: 'center'}}>
                        </Grid>
                    </Tooltip>
                ))}
            </Grid>
        )
    }
}
