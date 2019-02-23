// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CalendarRow from './RowOfCalendar.js';
import CalendarCol from './ColumnOfCalendar.js';

export default class ThirtyMinIntervalColumn extends Component {
    render () {
        const startTimes = Array.from(Array(48).keys());
        const endTimes = Array.from(Array(48).keys());
        const days = Array.of("Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday","Sunday");

        return (
            <div style={{width: '75%', marginLeft: 50}}>
                <div style = {{backgroundColor: '#7fbfbf', display: "flex", border: "solid 1px", height: 30,
                    textAlign: 'center'}}>
                    <Grid container spacing={16} style={{marginLeft: 100}}>
                        {days.map(day => (
                            <Grid item xs={1.4} style={{width: 100}}>
                                {day}
                            </Grid>
                        ))}
                    </Grid>
                </div>

                {/*<Grid container spacing={16} style={{flexGrow: 1, backgroundColor: '#9ad1d1'}}>*/}
                    {/*<Grid item xs={12}>*/}
                        {/*{startTimes.map((startTime, index,) => {*/}
                            {/*return (*/}
                                {/*<div>*/}
                                    {/*<div>{indexToTime(endTimes[index])}</div>*/}
                                    {/*<CalendarRow time={indexToTime(endTimes[index])}/>*/}
                                {/*</div>*/}
                            {/*)*/}
                        {/*})}*/}
                    {/*</Grid>*/}
                {/*</Grid>*/}
                <Grid container spacing={16} style={{flexGrow: 1, backgroundColor: '#9ad1d1'}}>
                    <Grid item xs={12}>
                        {days.map((day) => {
                            return (
                                <div>
                                    {/*<div>{indexToTime(endTimes[index])}</div>*/}
                                    <CalendarCol day={day}/>
                                    {/*time={indexToTime(endTimes[index])}*/}
                                </div>
                            )
                        })}
                    </Grid>
                </Grid>
            </div>
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
