// Minh & Allison
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

export default class CalendarRow extends Component {
    render() {
        const days = Array.of("Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday");
        return (
            <Grid container spacing={16} style={{marginLeft: 100}}>
                {days.map(day => (
                    <Grid item xs={1.4} style={{border:"solid 1px", fontSize: 6, backgroundColor: 'white',
                        width: 100, height: 20, textAlign: 'center'}}>
                        {day + " " + this.props.time}
                    </Grid>
                ))}
            </Grid>
        )
    }
}
