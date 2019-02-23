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
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import FilledInput from '@material-ui/core/FilledInput';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
//
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
        label: 'Room 0',
    },
    {
        value: 'Room1',
        label: 'Room 1',
    },
    {
        value: 'Room2',
        label: 'Room 2',
    },
];

class OutlinedInputAdornments extends React.Component {
    state = {
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        name: '',
        checkedA: true,
        checkedB: true
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };


    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    // handleClickShowPassword = () => {
    //     this.setState(state => ({ showPassword: !state.showPassword }));
    // };

    render() {
        const { classes } = this.props;

        return (
            <div >
                <div className={classes.root}>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="room-helper">Which room?</InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            input={<Input name="room" id="room-helper" />}
                        >
                            {ranges.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Select the room you want to reserve</FormHelperText>
                    </FormControl>



                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="component-helper">Number of people</InputLabel>
                        <Input
                            id="component-helper"
                            value={this.state.name}
                            onChange={this.handleChange}
                            aria-describedby="component-helper-text"
                        />
                        <FormHelperText id="component-helper-text">Input the number of people who will attend your event</FormHelperText>
                    </FormControl>

                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange('checkedA')}
                                    value="checkedA"
                                />
                            }
                            label="Alcohol"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.checkedB}
                                    onChange={this.handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Food"
                        />
                    </FormGroup>

                </div>
                {/*<TextField*/}
                {/*id="outlined-adornment-password"*/}
                {/*// className={classNames(classes.margin, classes.textField)}*/}
                {/*variant="outlined"*/}
                {/*type={this.state.showPassword ? 'text' : 'password'}*/}
                {/*label="Password"*/}
                {/*value={this.state.password}*/}
                {/*onChange={this.handleChange('password')}*/}
                {/*InputProps={{*/}
                {/*endAdornment: (*/}
                {/*<InputAdornment position="end">*/}
                {/*<IconButton*/}
                {/*aria-label="Toggle password visibility"*/}
                {/*onClick={this.handleClickShowPassword}*/}
                {/*>*/}
                {/*{this.state.showPassword ? <VisibilityOff /> : <Visibility />}*/}
                {/*</IconButton>*/}
                {/*</InputAdornment>*/}
                {/*),*/}
                {/*}}*/}
                {/*/>*/}
                <div className={classes.root}>
                    <form className={classes.formControl} noValidate>
                        <TextField
                            id="time"
                            label="Start Time"
                            type="time"
                            defaultValue="06:00"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </form>
                    <form className={classes.formControl} noValidate>
                        <TextField
                            id="time"
                            label="Start Time"
                            type="time"
                            defaultValue="16:00"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </form>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Reserve
                    </Button>
                </div>
            </div>

        );
    }
}

OutlinedInputAdornments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// const styles = theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     formControl: {
//         margin: theme.spacing.unit,
//     },
// });
//
// const ranges = [
//     {
//         value: 'Room0',
//         label: 'Room 0',
//     },
//     {
//         value: 'Room1',
//         label: 'Room 1',
//     },
//     {
//         value: 'Room2',
//         label: 'Room 2',
//     },
// ];

// class ComposedTextField extends React.Component {
//     state = {
//         name: 'Composed TextField',
//     };
//
//     componentDidMount() {
//         this.forceUpdate();
//     }
//
//     handleChange = event => {
//         this.setState({ name: event.target.value });
//     };
//
//     render() {
//         const { classes } = this.props;
//
//         return (
//             <div className={classes.container}>
//                 {/*<FormControl className={classes.formControl}>*/}
//                     {/*<InputLabel htmlFor="component-simple">Which room</InputLabel>*/}
//                     {/*<Input id="component-simple" value={this.state.name} onChange={this.handleChange} />*/}
//                 {/*</FormControl>*/}
//                 <FormHelperText id="component-helper-text">Select the room you want to reserve</FormHelperText>
//                 <TextField
//                     select
//                     label="Which room?"
//                     className={classNames(classes.margin, classes.textField)}
//                     value={this.state.weightRange}
//                     onChange={this.handleChange('weightRange')}
//                     InputProps={{
//                         startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
//                     }}
//                 >
//                     {ranges.map(option => (
//                         <MenuItem key={option.value} value={option.value}>
//                             {option.label}
//                         </MenuItem>
//                     ))}
//
//                 </TextField>
//
//                 {/*<FormControl className={classes.formControl}>*/}
//                     {/*<InputLabel htmlFor="component-helper">Which room</InputLabel>*/}
//                     {/*<Input*/}
//                         {/*select*/}
//                         {/*id="component-helper"*/}
//                         {/*value={this.state.name}*/}
//                         {/*onChange={this.handleChange}*/}
//                         {/*aria-describedby="component-helper-text"*/}
//                     {/*>*/}
//                     {/*{ranges.map(option => (*/}
//                             {/*<MenuItem key={option.value} value={option.value}>*/}
//                                 {/*{option.label}*/}
//                             {/*</MenuItem>*/}
//                         {/*))}*/}
//                     {/*</Input>*/}
//                     {/*<FormHelperText id="component-helper-text">Select the room you want to reserve</FormHelperText>*/}
//                 {/*</FormControl>*/}
//
//                 <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor="component-helper">Number of people</InputLabel>
//                     <Input
//                         id="component-helper"
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         aria-describedby="component-helper-text"
//                     />
//                     <FormHelperText id="component-helper-text">Input the number of people who will attend your event</FormHelperText>
//                 </FormControl>
//             </div>
//         );
//     }
// }
//
// ComposedTextField.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(ComposedTextField);
