// Minh & Allison
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { unstable_Box as Box } from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import CalendarRow from './RowOfCalendar.js';


export default class ThirtyMinIntervalColumn extends Component {
    render () {
        const startTimes = Array.from(Array(48).keys());
        const endTimes = Array.from(Array(48).keys());
        const days = Array.of("Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday","Sunday");
        // const styles = theme => ({
        //     root: {
        //         flexGrow: 1,
        //     },
        //     paper: {
        //         padding: theme.spacing.unit,
        //         textAlign: 'center',
        //         color: theme.palette.text.secondary,
        //     },
        // });
        // function FormRow(props) {
        //     // const { classes } = props;
        //     return (
        //         <React.Fragment>
        //             <Grid item xs={4}>
        //                 <Paper >{indexToTime(2)} </Paper>
        //             </Grid>
        //             <Grid item xs={4}>
        //                 <Paper >item</Paper>
        //             </Grid>
        //             <Grid item xs={4}>
        //                 <Paper >item</Paper>
        //             </Grid>
        //         </React.Fragment>
        //     );
        // }
        // FormRow.propTypes = {
        //     classes: PropTypes.object.isRequired,
        // };
        // function NestedGrid(props) {
        //     const { classes } = props;
        //
        //     return (
        //         <div className={classes.root}>
        //             <Grid container spacing={8}>
        //                 <Grid container item xs={12} spacing={24}>
        //                     <FormRow classes={classes} />
        //                 </Grid>
        //                 <Grid container item xs={12} spacing={24}>
        //                     <FormRow classes={classes} />
        //                 </Grid>
        //                 <Grid container item xs={12} spacing={24}>
        //                     <FormRow classes={classes} />
        //                 </Grid>
        //             </Grid>
        //         </div>
        //     );
        // }
        // NestedGrid.propTypes = {
        //     classes: PropTypes.object.isRequired,
        // };
        return (

            <div>
                <div style = {{backgroundColor: '#7fbfbf', display: "flex", border: "solid 1px", height: 50, width: "100%",
                textAlign: 'center'}}>

                        {/*<Grid container spacing={84}>*/}
                            <Grid container item xs={12} >
                                <Grid item xs={1}>

                                </Grid>

                                    {days.map((day,) => {

                                        return (<Grid item xs={1}>
                                        {day}

                                        </Grid>

                                        )
                                    })
                                    }
                            {/*</Grid>*/}

                        </Grid>
                </div>


                {startTimes.map((startTime, index,) => {
                    return (
                        <div>
                            <div style = {{backgroundColor: '#7fbfbf', display: "flex", borderBottom: "solid 1px"}}>
                                <div >

                                    <Grid container spacing={8}>
                                        <Grid container item xs={12}>

                                           {indexToTime(endTimes[index])}

                                            <CalendarRow time={indexToTime(endTimes[index])}/>

                                        </Grid>
                                    </Grid>

                                    {/*<Box border={1}>*/}
                                        {/*{indexToTime(endTimes[index])}*/}
                                    {/*</Box>*/}

                                </div>
                            </div>
                        </div>
                    )
                })}
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
