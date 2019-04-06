// Minh & Allison
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import 'date-fns';

export default class CalendarCol extends Component {
    color = '';
    render() {
        const startTimes = Array.from(Array(48).keys());
        const daysOfWeek = Array.of("Sunday", "Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday");

        return (
            <Grid container xs = {12} spacing={4} style={{marginLeft: 0}}>

                {startTimes.map((startTime, index,) => {

                    var [start, end] = timeToIndex(this.props.startTime, this.props.endTime);
                    // var startDate = String(this.props.pickedStartDate).split("/");
                    // var endDate = String(this.props.pickedEndDate).split("/");

                    var startDayIndex =this.props.pickedStartDate.getDay();
                    var endDayIndex = this.props.pickedEndDate.getDay();

                    var startDayOfWeek = daysOfWeek[startDayIndex];
                    var endDayOfWeek = daysOfWeek[endDayIndex];


                    // console.log(startDayOfWeek);
                    // console.log(this.props.day);

                    if (startTime >= start && startTime <= end) {
                        if (startDayOfWeek === this.props.day) {
                            // if (this.color === 'blue') {
                            //     this.color = 'red';
                            // }
                            this.color = 'blue';
                            this.opacity = 0.5;
                            // this.visibility  = "visible"
                        }
                    } else {
                        this.color = 'white';
                        this.opacity  = 1;
                        // this.visibility = "visible";
                    }

                    return(

                        <Tooltip title={this.props.day + " " + indexToTime(startTimes[index])}>

                            <Grid item xs={12} style={{border:"solid 1px", fontSize: 8, backgroundColor: this.color,
                                width: 100, height: 15, textAlign: 'center', opacity:  this.opacity}}>
                                {console.log("Wack")}
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
    // console.log(endTimeStr);
    var startTimeInt = String(startTimeStr).split(":");
    var startHour = startTimeInt[0];
    var startMin = startTimeInt[1];
    var endTimeInt = String(endTimeStr).split(':');
    var endHour = endTimeInt[0];
    var endMin = endTimeInt[1];
    var startIndex = (startHour * 2) + (startMin / 30);
    var endIndex = (endHour * 2) + (endMin / 30);
    return [startIndex, endIndex];

}
