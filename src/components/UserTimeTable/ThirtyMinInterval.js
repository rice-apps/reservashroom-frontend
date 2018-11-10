import React, { Component } from 'react';

export default class ThirtyMinInterval extends Component {
    render () {
        // const startTimes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,
        //     35,36,37,38,39,40,41,42,43,44,45,46,47]
        // const endTimes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,
        //     35,36,37,38,39,40,41,42,43,44,45,46,47]
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

