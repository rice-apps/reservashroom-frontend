// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

export default class CalendarCol extends Component {
    render() {
        const startTimes = Array.from(Array(48).keys());
        return (
            <Grid container spacing={16} style={{marginLeft: 100}}>
                {startTimes.map((startTime, index,) => (
                    <Tooltip title={this.props.day + " " + indexToTime(startTimes[index])}>
                        <Grid item xs={1.4} style={{border:"solid 1px", fontSize: 6, backgroundColor: 'white',
                            width: 100, height: 20, textAlign: 'center'}}>
                        </Grid>
                    </Tooltip>
                ))}
            </Grid>
        )
    }




}
function indexToTime(index) {
    var hour = Math.floor(index/2);
    var minute = index%2 * 30;
    minute = minute == 0 ? "00" : "30";
    var time = hour < 12 ? hour + ":" + minute + " AM" : hour - 12 + ":" + minute + " PM";
    time = time == "0:00 AM" ? "12:00 AM" : time;
    time = time == "0:30 AM" ? "12:30 AM" : time;
    time = time == "0:00 PM" ? "12:00 PM" : time;
    time = time == "0:30 PM" ? "12:30 PM" : time;
    return time
}
