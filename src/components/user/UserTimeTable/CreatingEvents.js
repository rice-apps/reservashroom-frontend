// Minh & Allison

import React, { Component } from 'react';
import UserReservationPageInterface from '../UserReservationPageInterface.js';

export default class CreatingEvents extends Component {
    render() {

    }
}

function timeToIndex(startHour, startMin, endHour, endMin) {
    var startIndex = (startHour * 2) + (startMin / 30);
    var endIndex = (endHour * 2) + (endMin / 30);
    return [startIndex, endIndex];

}

