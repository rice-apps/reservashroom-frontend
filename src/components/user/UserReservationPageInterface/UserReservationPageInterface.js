import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ReactDOM from 'react-dom';
import Grid from "@material-ui/core/Grid/Grid";
import ThirtyMinIntervalColumn from "../UserTimeTable/ThirtyMinIntervalColumn";
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,  InlineDatePicker } from 'material-ui-pickers';

const SmallBlockDiv = styled.div`
    display: inline-block;
    width: 35%;
`;

const BigBlockDiv = styled.div`
    display: inline-block;
    width: 65%;
`;

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

const ranges = [
    {
        value: 'Room0',
        label: 'PDR',
    },
    {
        value: 'Room1',
        label: 'Kitchen',
    },
    {
        value: 'Room2',
        label: 'Movie Room',
    },
];

class UserReservationPageInterface extends React.Component {

    state = {
        room: '',
        eventName: '',
        numPeople: 0,
        food: false,
        alcohol:false,
        startTime:"06:00",
        endTime: "16:00",
        pickedStartDate: new Date('2019/03/23'),
        pickedEndDate: new Date('2019/03/23'),
        maxCapacity: 20,
        maxDuration: 120,
        allowAlcohol: 0,
        allowFood: 1,
        weeksInAdvance: 0,
        autoReserve: 1,
        allowRecurring:1
    };

    infoMessage = 'No error for now';

    componentDidMount() {
        // this.setState({
        //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        // });
        this.forceUpdate();
    }

    handleRoomChoose = event => {
        this.setState({ room: event.target.value });
        getRoomInfo(event.target.value);
    };

    handleToggle = prop => event => {
        this.setState({ [prop]: event.target.checked });
        CheckLegal([prop], event.target.checked);
    };

    handleTimeChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    handleStartDateChange = (date) => {
        this.setState({ pickedStartDate: date });
    };

    handleEndDateChange = (date) => {
        this.setState({ pickedEndDate: date });
    };


    handleButtonClick = () =>{
        console.log(this.state);
    };

    handleNumPeopleChange = event =>{
        this.setState({numPeople: event.target.value});
        console.log(event.target.value);
        CheckLegal("numPeople", event.target.value);
    };

    handleEventNameChange = event =>{
        this.setState({eventName: event.target.value});
        console.log(event.target.value);
    };


    // handleChange = name => event => {
    //     this.setState({
    //         [name]: event.target.value,
    //     });
    // };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <SmallBlockDiv>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Which room</InputLabel>
                                <Select
                                    value={this.state.room}
                                    onChange={this.handleRoomChoose}
                                    inputProps={{
                                        name: 'Which room',
                                        id: 'age-simple',
                                    }}
                                >
                                    {ranges.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>Select the room you want to reserve</FormHelperText>
                            </FormControl>

                            <TextField
                                id="numPeople"
                                label="Number of People"
                                className={classes.textField}
                                helperText= "Input the number of people who will attend your event"
                                // margin="normal"
                                onChange={this.handleNumPeopleChange}
                                value = {this.state.eventName}
                            />

                            <TextField
                                id="eventName"
                                label="Event Name"
                                className={classes.textField}
                                helperText= "Input the name of your event"
                                onChange={this.handleEventNameChange}
                                value = {this.state.numPeople}
                            />

                        </div>
                        <div>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.alcohol}
                                            onChange={this.handleToggle('alcohol')}
                                            value={true}
                                        />
                                    }
                                    label="Alcohol"
                                />

                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.food}
                                            onChange={this.handleToggle('food')}
                                            value= {true}
                                            color="primary"
                                        />
                                    }
                                    label="Food"
                                />
                            </FormGroup>
                        </div>


                        <div>
                            <TableRow>
                            {/*Start Date and Time*/}
                            <FormControl className={classes.formControl}>
                                {/*<form className={classes.formControl} noValidate>*/}
                                <TextField
                                    id="time"
                                    label="Start Time"
                                    type="time"
                                    value={this.state.startTime}
                                    className={classes.name}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 1800, // 5 min
                                    }}
                                    onChange={this.handleTimeChange('startTime')}
                                />
                                {/*</form>*/}
                                {/*<form className={classes.formControl} noValidate>*/}
                            </FormControl>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                    <InlineDatePicker
                                        keyboard
                                        margin="normal"
                                        label="Start date"
                                        value={this.state.pickedStartDate}
                                        onChange={this.handleStartDateChange}
                                        format="MM/dd/yyyy"
                                        // mask={value =>
                                        //     // handle clearing outside if value can be changed outside of the component
                                        //     value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : []
                                        // }
                                        disableOpenOnEnter
                                        animateYearScrolling={false}
                                    />

                            </MuiPickersUtilsProvider>
                            </TableRow>


                            {/*End Date and Time*/}
                            <TableRow>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id="time"
                                    label="End Time"
                                    type="time"
                                    value={this.state.endTime}
                                    className={classes.name}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 1800, // 5 min
                                    }}
                                    onChange={this.handleTimeChange('endTime')}
                                />
                                {/*</form>*/}
                            </FormControl>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <InlineDatePicker
                                    keyboard
                                    margin="normal"
                                    label="End date"
                                    value={this.state.pickedEndDate}
                                    onChange={this.handleEndDateChange}
                                    format="MM/dd/yyyy"
                                    mask={value =>
                                        // handle clearing outside if value can be changed outside of the component
                                        value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : []
                                    }
                                    disableOpenOnEnter
                                    animateYearScrolling={false}
                                />
                            </MuiPickersUtilsProvider>
                            </TableRow>
                            <Paper className={classes.root} elevation={1}>
                                <Typography variant="h5" component="h3">
                                    {this.infoMessage}
                                </Typography>
                            </Paper>
                        </div>
                    </form>
                    <Grid item xs = {6}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick = {this.handleButtonClick.bind(this)}
                        >
                            Reserve
                        </Button>
                    </Grid>
                </SmallBlockDiv>
                <BigBlockDiv>
                    <ThirtyMinIntervalColumn startTime ={this.state.startTime} endTime = {this.state.endTime}
                        pickedStartDate={this.state.pickedStartDate}  pickedEndDate={this.state.pickedEndDate}
                        eventName = {this.state.eventName}/>
                </BigBlockDiv>
            </div>
        );
    }

}

UserReservationPageInterface.propTypes = {
    classes: PropTypes.object.isRequired,
};

function getRoomInfo(roomName) {
    var i;
    for (i = 0; i < this.props.rooms; i++) {
        if (this.props.rooms[i].name == roomName) {
            let roomInfo = this.props.rooms[i];
            this.setState({maxCapacity: roomInfo.maxCapacity});
            this.setState({maxDuration: roomInfo.maxDuration});
            this.setState({allowAlcohol: roomInfo.alcohol});
            this.setState({allowFood: roomInfo.food});
            this.setState({weeksInAdvance: roomInfo.weeksInAdvance});
            this.setState({autoReserve: roomInfo.autoReserve});
            this.setState({allowRecurring: roomInfo.allowRecurring});
            break;
        }
    }
}

function CheckLegal(type, value) {
    //This functions check for any possible conflicts and send that to the user
    switch (type) {

        // room: '',
        //     eventName: '',
        //     alcohol:false,
        //     startTime:"06:00",
        //     endTime: "16:00",
        //     pickedStartDate: new Date('2019/03/23'),
        //     pickedEndDate: new Date('2019/03/23'),
        //     weeksInAdvance: 0,
        //     autoReserve: 1,
        //     allowRecurring:1
        case "numPeople":
            if (value > this.maxCapacity) {
                this.info = "Too many people";
            }
            break;
        case "food":
            if (value === true &&  this.allowFood === 0) {
                this.info = "Event does not allow food";
            }
            break;
        case "alcohol":
            if (value === true &&  this.allowAlcohol === 0) {
                this.info = "Event does not allow alcohol";
            }
            break;
        default:
            this.infoMessage = "";
    }
}

export default withStyles(styles)(UserReservationPageInterface);

