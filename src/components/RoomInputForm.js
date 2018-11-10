import React, { Component } from 'react';
import {roomDetails} from '../actions/masterCalendarActions';

export default class RoomInputForm extends Component {

    render() {
        const rules = ['roomNameInput', 'roomCapacityInput', 'roomMaxDurationInput', 'allowsAlcoholInput', 'allowsFoodInput', 'weeksInAdvanceInput', 'autoReserveInput', 'allowRecurringInput' ];
        const titles = ['Name', 'Capacity', 'Maximum Duration', 'Alcohol?', 'Food?', 'Weeks In Advance', 'Auto Reserve?', 'Recurring?']

        return (

            <div>
                {rules.map((rule, index) => {
                    return (
                        <div style={{backgroundColor: 'white', padding: 10, margin: 5, display: 'flex', justifyContent: 'space-between'}}>
                     <span style={{color: 'black', backgroundColor: '#000000', marginRight: 10, flex:1}}>
                         {titles[index]}
                     </span>

                            <input onChange={(e) => roomDetails(e)} name = {rule} />
                            <span style={{flex:8}}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}
