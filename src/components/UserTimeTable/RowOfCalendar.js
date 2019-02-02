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
            days.map((day,) => {
                    return (
                        <Grid container item xs={1} style={{borderRight:"solid 1px",
                        borderLeft:"solid 1px"}}>
                            <Grid>
                                adfs
                            </Grid>
                        </Grid>
                    )

                })
        )


        // this.props.time

    }
}
