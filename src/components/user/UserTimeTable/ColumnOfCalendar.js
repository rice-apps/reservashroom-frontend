// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';


export default class CalendarCol extends Component {
    color = '';
    render() {
        const startTimes = Array.from(Array(48).keys());
        return (
            <Grid container xs = {12} spacing={4} style={{marginLeft: 0}}>
                {startTimes.map((startTime, index,) => {
                    var start = timeToIndex(this.props.startTime);
                    var end = timeToIndex(this.props.endTime);

                    if (startTime >= start && startTime <= end) {
                        this.color = 'blue';
                    } else {
                        this.color = 'white'
                    }
                    return(
                        <Tooltip title={this.props.day + " " + indexToTime(startTimes[index])}>

                            <Grid item xs={12} style={{border:"solid 1px", fontSize: 8, backgroundColor: this.color,
                                width: 100, height: 15, textAlign: 'center'}}>
                                {/*{this.props.day}*/}
                            </Grid>
                        </Tooltip>
                    );
                })}
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

function timeToIndex(startTimeStr, endTimeStr) {
    var startTimeInt = startTimeStr.split(':');
    var startHour = startTimeInt[0];
    var startMin = startTimeInt[1];
    var endTimeInt = endTimeStr.split(':');
    var endHour = endTimeInt[0];
    var endMin = endTimeInt[1];
    var startIndex = (startHour * 2) + (startMin / 30);
    var endIndex = (endHour * 2) + (endMin / 30);
    return [startIndex, endIndex];

}
