// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CalendarCol from './ColumnOfCalendar.js';
import CalendarColTime from './ColumnOfCalendarTimeLabel.js';

export default class ThirtyMinIntervalColumn extends Component {

render () {
        const startTimes = Array.from(Array(48).keys());
        const endTimes = Array.from(Array(48).keys());
        const days = Array.of("Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday","Sunday");
        return (
            <div style={{width: '80%', marginLeft: 50}}>
                <div style = {{ display: "flex",
                    textAlign: 'center'}}>


                    <Grid container spacing={4} style = {{height: 15}} >
                        <Grid item xs={1} style={{width: 75,  backgroundColor: '#7fbfbf'} }>
                            {/*INTENTIONALLY Empty for spacing */}
                        </Grid>

                        {days.map(day => (
                            <Grid item xs={1} style={{border: "solid 1px",width: 75,
                                backgroundColor: '#7fbfbf', fontSize: 8}}>
                                {day}
                            </Grid>
                        ))}
                    </Grid>
                </div>

                <Grid container spacing={4}>
                    {/*<Grid item xs = {12/7.0}>*/}


                    <Grid item xs={1} style={{  backgroundColor: '#9ad1d1'}}>
                        <div>
                        {/*This is INTENTIONALLY EMPTY to help with spacing */}
                        <CalendarColTime/>
                        </div>
                    </Grid>

                    {this.props.events.map((event) => {

                        // console.log(event.pickedEndDate);
                        days.map((day) => {
                            return (
                                <Grid item xs={1} style={{}}>
                                    <div>
                                        <CalendarCol startTime={event.startTime} endTime={event.endTime}
                                                     pickedStartDate={event.pickedStartDate}
                                                     pickedEndDate={event.pickedEndDate}
                                                     day={day} eventName={event.eventName}/>
                                    </div>
                                </Grid>
                            )
                        })
                    })}

                    {/*{days.map((day) => {*/}
                        {/*return (*/}
                            {/*<Grid item xs={1} >*/}
                                {/*<div>*/}
                            {/*<CalendarCol startTime={this.props.startTime} endTime={this.props.endTime}*/}
                                         {/*pickedStartDate={this.props.pickedStartDate}*/}
                                         {/*pickedEndDate={this.props.pickedEndDate}*/}
                                         {/*day={day} eventName={this.props.eventName}/>*/}
                                {/*</div>*/}
                            {/*</Grid>*/}
                        {/*)*/}
                    {/*})}*/}

                    {/*</Grid>*/}
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
