import React, { Component } from 'react';

export default class ThirtyMinInterval extends Component {
    render () {

        const startTimes = Array.from(Array(48).keys())
        const endTimes = Array.from(Array(48).keys())

        return (
            startTimes.map((startTime, index,) => {
                return (
                    <div style = {{backgroundColor: '#7fbfbf', display: "flex", border: "solid 1px"}}>
                        {indexToTime(endTimes[index])}




                    </div>
                )
            })

        )
    }
}

function indexToTime(index) {
    var hour = Math.floor(index/2)
    var minute = index%2 * 30
    minute = minute == 0 ? "00" : "30"
    var time = hour < 12 ? hour + ":" + minute + " AM" : hour - 12 + ":" + minute + " PM"
    time = time == "0:00 AM" ? "12:00 AM" : time
    time = time == "0:30 AM" ? "12:30 AM" : time
    time = time == "0:00 PM" ? "12:00 PM" : time
    time = time == "0:30 PM" ? "12:30 PM" : time
    return time
}

