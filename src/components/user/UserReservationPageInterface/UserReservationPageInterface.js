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
        numPeople: 0,
        food: false,
        alcohol:false,
        startTime:"06:00",
        endTime: "16:00",
        pickedStartDate: "3/12/2019",
        pickedEndDate: "3/12/2019",
    };

    componentDidMount() {
        // this.setState({
        //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        // });
        this.forceUpdate();
    }

    handleRoomChoose = event => {
        this.setState({ room: event.target.value });
    };

    handleToggle = prop => event => {
        this.setState({ [prop]: event.target.checked });
    };

    handleTimeChange = prop => event => {
        this.setState({[prop]: event.target.value});
    }

    handleDateChange = prop => event => {
        this.setState({[prop]: event.target.value});
    }

    handleButtonClick = () =>{
        console.log(this.state);
    };

    handleNumPeopleChange = event =>{
        this.setState({numPeople: event.target.value});
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
                <Grid container spacing={4}>
                    <Grid item xs = {6}>

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

                                {/*End Date and Time*/}
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="time"
                                        label="Start Time"
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick = {this.handleButtonClick.bind(this)}
                                >
                                    Reserve
                                </Button>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs = {6}>
                        <ThirtyMinIntervalColumn startTime ={this.state.startTime} endTime = {this.state.endTime}
                                                 pickedStartDate={this.state.pickedStartDate}  pickedEndDate={this.state.pickedEndDate} />
                    </Grid>
                </Grid>
            </div>
        );
    }

}

UserReservationPageInterface.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserReservationPageInterface);

