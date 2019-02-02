import React, { Component } from 'react';
import {roomDetails} from '../rdx/actions/adminCalendarActions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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
            weeksInAdvanceInput: '',
            startTimeInput: '',
            endTimeInput: '',
            rules: '',
            rooms: []
        };
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    createRoom = () => {
        var new_room = [
            {
                roomName: this.state.roomNameInput,
                roomCapacity: this.state.roomCapacityInput,
                roomMaxDuration: this.state.roomMaxDurationInput,
                allowsAlcohol: this.state.allowsAlcoholInput,
                allowsFood: this.state.allowsFoodInput,
                autoReserve: this.state.autoReserveInput,
                weeksInAdvance: this.state.weeksInAdvanceInput,
                startTime: this.state.startTimeInput,
                endTime: this.state.endTimeInput,
            }
        ];
        var rooms = this.state.rooms;
        rooms.push(new_room);
        this.setState({
            rooms: rooms
        })

    }

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
            {
                value: 'Null',
                label: 'Does not apply'
            }


        ];

        const styles = theme => ({
            fab: {
                margin: theme.spacing.unit,
            },

        });

        const rules = ['roomNameInput', 'roomCapacityInput', 'roomMaxDurationInput', 'weeksInAdvanceInput', 'startTimeInput', 'endTimeInput' ];
        const titles = ['Name', 'Capacity', 'Maximum Duration', 'Weeks In Advance', 'When to start', 'When to end']
        const rulesYN = ['allowsAlcoholInput', 'allowsFoodInput', 'autoReserveInput']
        const titlesYN = ['Alcohol?', 'Food?', 'Auto Reserve?']
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

                            {this.state.rooms.map((room)=>{
                                return (
                                    <div>
                                        {room.roomName}
                                    </div>
                                )
                            })}

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


                <div>
                    <Fab color="Azure" aria-label="Add" onClick={()=>this.createRoom()}>
                        <AddIcon />
                    </Fab>
                </div>
            </div>
            </form>
        );
    }
}
