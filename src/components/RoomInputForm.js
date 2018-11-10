import React, { Component } from 'react';
import {roomDetails} from '../rdx/actions/adminCalendarActions';

export default class RoomInputForm extends Component {

    render() {
        const rules = ['roomNameInput', 'roomCapacityInput', 'roomMaxDurationInput', 'allowsAlcoholInput', 'allowsFoodInput', 'weeksInAdvanceInput', 'autoReserveInput', 'allowRecurringInput', 'startTimeInput', 'endTimeInput' ];
        const titles = ['Name', 'Capacity', 'Maximum Duration', 'Alcohol?', 'Food?', 'Weeks In Advance', 'Auto Reserve?', 'Recurring?', 'When to start', 'When to end']

        return (

            <div style={{backgroundColor: 'Aquamarine', height: '150%'}}>
                {rules.map((rule, index) => {
                    return (
                        <div style={{backgroundColor: 'Azure', padding: 10, margin: 5, display: 'flex', justifyContent: 'space-between'}}>
                     <span style={{color: 'DarkSalmon', marginRight: 10, flex:1}}>
                         {titles[index]}
                     </span>

                            <input onChange={(e) => roomDetails(e)} name = {rule} />
                            <span style={{flex:8}}/>
                        </div>
                    )
                })}



                <div style={{backgroundColor: 'Azure', padding: 10, margin: 5, display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{color: 'DarkSalmon', marginRight: 10, flex:1}}>
                        {'Rules?'}
                    </span>

                    <input onChange={(e) => roomDetails(e)} name = 'rulesInput' />
                    <span style={{flex:8}}/>
                </div>



            </div>
        );
    }
}
