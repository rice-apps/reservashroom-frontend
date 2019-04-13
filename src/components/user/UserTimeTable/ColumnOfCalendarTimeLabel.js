// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

export default class CalendarColTime extends Component {
    render() {
        const startTimes = Array.from(Array(34).keys());
        return (
            <Grid container xs = {12} spacing={4} style={{marginTop: '-7px'}}>
                {startTimes.map((index) => (
                        <Grid item xs={12} style={{ fontSize: 10,
                            width: 100, height: 15, textAlign: 'right', marginRight: 5}}>
                            {index % 2 ? '' : indexToTime(index)}
                        </Grid>
                ))}
            </Grid>
        )
    }




}
function indexToTime(index) {
    var hour = Math.floor(index/2) + 9;
    var minute = index%2 * 30;
    minute = minute == 0 ? "00" : "30";
    var time = hour < 12 ? hour + ":" + minute + " AM" : hour - 12 + ":" + minute + " PM";
    time = time == "0:00 PM" ? "12:00 PM" : time;
    time = time == "0:30 PM" ? "12:30 PM" : time;
    time = time == "13:00 PM" ? "1:00 AM" : time;
    time = time == "13:30 PM" ? "1:30 AM" : time;
    return time
}
