import React, { Component } from 'react';
import {roomDetails} from '../rdx/actions/adminCalendarActions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



export default class RoomInputForm extends Component {

    constructor(state, props) {
        super(state, props);
        this.state = {
            multiline: 'Controlled',
            roomNameInput: '',
            roomCapacityInput: '',
            roomMaxDurationInput: '',
            allowsAlcoholInput: 'No',
            allowsFoodInput: 'No',
            autoReserveInput: 'No',
            allowRecurringInput: 'No',
            weeksInAdvanceInput: '',
            startTimeInput: '',
            endTimeInput: '',
            rules: '',
        };
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const options= [
            {
                value: 'True',
                label: 'Yes',
            },
            {
                value: 'False',
                label: 'No',
            },
        ];
        const rules = ['roomNameInput', 'roomCapacityInput', 'roomMaxDurationInput', 'weeksInAdvanceInput', 'startTimeInput', 'endTimeInput' ];
        const titles = ['Name', 'Capacity', 'Maximum Duration', 'Weeks In Advance', 'When to start', 'When to end']
        const rulesYN = ['allowsAlcoholInput', 'allowsFoodInput', 'autoReserveInput', 'allowRecurringInput']
        const titlesYN = ['Alcohol?', 'Food?', 'Auto Reserve?', 'Recurring?']
        return (

            <form>
            <div style={{backgroundColor: 'Aquamarine', height: '150%'}}>
                {rules.map((rule, index) => {
                    return (
                        <div style={{backgroundColor: 'Azure', paddingLeft: 5, display: 'flex', justifyContent: 'space-between'}}>

                            {/*<input onChange={(e) => roomDetails(e)} name = {rule} />*/}
                            <TextField

                                id="standard-name"
                                label={titles[index]}
                                value={this.state[rule]}
                                onChange={this.handleChange(rule)}
                                margin="normal"
                            />
                            <span style={{flex:8}}/>
                        </div>
                    )
                })}
                {rulesYN.map((rule, index) => {
                    return (
                        <div style={{backgroundColor: 'Azure', paddingLeft: 5, display: 'flex', justifyContent: 'space-between'}}>

                            <TextField
                                id="standard-select-currency"
                                select
                                label={titlesYN[index]}
                                value={this.state[rule]}
                                onChange={this.handleChange(rule)}


                                margin="normal"
                            >
                                {options.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <span style={{flex:8}}/>
                        </div>
                    )
                })}



                <div style={{backgroundColor: 'Azure', paddingLeft: 5, display: 'flex', justifyContent: 'space-between'}}>


                    {/*<input onChange={(e) => roomDetails(e)} name = 'rulesInput' />*/}

                    <TextField
                        id="standard-textarea"
                        label="Rules?"
                        placeholder="Placeholder"
                        multiline
                        margin="normal"
                    />

                    <span style={{flex:8}}/>
                </div>



            </div>
            </form>
        );
    }
}
