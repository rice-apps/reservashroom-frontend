// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import 'date-fns';

export default class CalendarCol extends Component {
    color = '';
    render() {
        const startTimes = Array.from(Array(34).keys());
        const daysOfWeek = Array.of("Sunday", "Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday");

        return (
            <Grid container xs = {12} spacing={4} style={{marginLeft: 0}}>

                {startTimes.map((startTime, index,) => {

                    var [start, end] = timeToIndex(this.props.startTime, this.props.endTime);
                    // start = start + 9; end = end + 9;
                    var startDayIndex =this.props.pickedStartDate.getDay();
                    var startDayOfWeek = daysOfWeek[startDayIndex];

                    //
                    // console.log(start);
                    //
                    //
                    // console.log(end);
                    if (startTime >= start && startTime < end) {
                        if (startDayOfWeek === this.props.day) {
                            this.color = ["Monday", "Wednesday", "Friday", "Sunday"].includes(this.props.day) ?
                                'rgba(62, 155, 97, 0.9)' :
                                'rgba(62, 155, 97, 0.7)' ;
                        }
                    } else {
                        this.color = ["Monday", "Wednesday", "Friday", "Sunday"].includes(this.props.day) ?
                            'rgba(179, 194, 191, 0.2)' :
                            'rgba(233, 236, 229, 1)';
                    }

                    return(

                        <Tooltip title={this.props.day + " " + indexToTime(startTimes[index])}>
                            <Grid item xs={12} style={{border:"dotted 0.5px rgba(250, 250, 250, 0.8)", fontSize: 8, backgroundColor: this.color,
                                width: 100, height: 15, textAlign: 'center'}}/>
                        </Tooltip>
                    );
                })}
            </Grid>
        )
    }




}
function indexToTime(index) {
    index == 30 ? index = -18 : index;
    index == 31 ? index = -17: index;
    index == 32 ? index =-16 : index;
    index == 33 ? index = -15 : index;
    var hour = Math.floor(index/2) + 9;
    var minute = index % 2 * 30;
    minute = minute == 0 ? "00" : "30";
    var time = hour < 12 ? hour + ":" + minute + " AM" : hour - 12 + ":" + minute + " PM";
    time = time == "0:00 AM" ? "12:00 AM" : time;
    time = time == "0:30 AM" ? "12:30 AM" : time;
    time = time == "0:00 PM" ? "12:00 PM" : time;
    time = time == "0:30 PM" ? "12:30 PM" : time;
    return time
}

function timeToIndex(startTimeStr, endTimeStr) {
    // console.log(endTimeStr);
    var startTimeInt = String(startTimeStr).split(":");
    var startHour = startTimeInt[0] - 9;
    var startMin = startTimeInt[1];
    var endTimeInt = String(endTimeStr).split(':');
    var endHour = endTimeInt[0] - 9;
    var endMin = endTimeInt[1];
    var startIndex = (startHour * 2) + (startMin / 30);
    var endIndex = (endHour * 2) + (endMin / 30);
    console.log(endIndex);
    endIndex == -18 ? endIndex = 30 : endIndex;
    endIndex == -17 ? endIndex = 31 : endIndex;
    endIndex == -16 ? endIndex = 32 : endIndex;
    endIndex == -15 ? endIndex = 33 : endIndex;
    endIndex == -14 ? endIndex = 34 : endIndex;
    return [startIndex, endIndex];

}
