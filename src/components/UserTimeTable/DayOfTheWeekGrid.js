// Minh and Allison
import React, { Component } from 'react';

export default class DayOfTheWeekGrid extends Component {
    render() {
        const days = Array.of("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");
        const styles = theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing.unit,
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        });

        return (
            days.map((day,) => {
                return (
                    <div>
                    </div>
                )
            })
        )
    }

}
