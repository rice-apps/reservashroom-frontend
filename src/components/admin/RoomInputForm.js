import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';

export default class RoomInputForm extends Component {

    constructor(state, props) {
        super(state, props);
        this.state = {
            multiline: 'Controlled',
            rules: [[''], ['', true], ['', true], ['', true], ['', true], ['', true], ['', true], ['', true], ['']],
        };
    }
    toggleRule = index => event => {
        let rules = this.state.rules;
        rules[index][1] = event.target.checked;
        this.setState({
            rules: rules,
        });
    };

    changeRule = index => event => {
        let rules = this.state.rules;
        rules[index][0] = event.target.value;
        this.setState({
            rules: rules,
        });
    };

    createRoom = () => {
        let new_room =
            {
                roomName: this.state.rules[0],
                roomCapacity: this.state.rules[1],
                roomMaxDuration: this.state.rules[2],
                weeksInAdvance: this.state.rules[3],
                startTime: this.state.rules[4],
                endTime: this.state.rules[5],
                allowsAlcohol: this.state.rules[6],
                allowsFood: this.state.rules[7],
                autoReserve: this.state.rules[8],
            };
        let rooms = this.props.rooms;
        rooms.push(new_room);
        this.props.updateRooms(rooms);
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
            }
        ];

        const titles = [
            'Room Name',        // 0  -- Free input
            'Max Capacity',     // 1
            'Maximum Duration', // 2
            'Weeks In Advance', // 3
            'When to start',    // 4
            'When to end',      // 5
            'Alcohol?',         // 6 -- Yes/No input
            'Food?',            // 7
            'Auto Reserve?'];   // 8

        return (
            <div>
                {this.state.rules.map((rule, index) => {
                    return (
                        <div style={{height: 50, margin: -10, display: 'flex'}}>
                            <div style={{width: 60, marginTop: 10}}>
                                {rule.length > 1 ? <Switch
                                    checked={rule[1]}
                                    onChange={this.toggleRule(index)}
                                    value={true}
                                /> : <div/>}
                            </div>
                            <TextField
                                select={index > 5}
                                label={titles[index]}
                                value={rule[0]}
                                onChange={this.changeRule(index)}
                                margin="dense"
                                style={{width: 150}}
                            >
                                {index > 5 ? options.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                )) : <div/>}
                            </TextField>
                        </div>
                    )
                })}

                {this.props.rooms.map((room)=>{
                    return (
                        <div>
                            {room.roomName}
                        </div>
                    )
                })}

                <div style={{backgroundColor: 'Azure', paddingLeft: 5, display: 'flex', justifyContent: 'space-between'}}>
                    <TextField
                        id="standard-textarea"
                        label="Rules?"
                        placeholder="Placeholder"
                        multiline
                        margin="normal"
                    />
                </div>
                <div>
                    <Fab color="primary" aria-label="Add" onClick={()=>this.createRoom()}>
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        );
    }
}
