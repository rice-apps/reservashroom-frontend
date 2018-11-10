import { combineReducers } from 'redux'

// A fake reducer I made as an example
// In "state", define the shape of the data you are taking in
// Always check the type of the incoming action
// (you can define type name to be whatever you want)
// Then return a modified version of the state
// Remember that {...state, } expands all of the existing
// state values into the new object
const fakeReducer = (state={open:false}, action) => {
    switch(action.type) {
        case "TOGGLE_OPEN":
            return {...state, toggle:action.toggle};
        default:
            return state
    }
};

const roomInput = (state={name:'', capacity: -1, maxdur: -1, alcohol: -1, food: -1, weeks: -1, auto: false, recur: false, start: '', end: '', addRule: [] }, action) => {
    switch(action.type) {
        case "ROOM_NAME":
            return {...state, name:action.detail}
        case "ROOM_CAPACITY":
            return {...state, capacity:action.detail}
        case "ROOM_DUR":
            return {...state, maxdur:action.detail}
        case "ROOM_WEEKS":
            return {...state, weeks:action.detail}
        case "ROOM_ALC";
            return {...state, alcohol:action.detail}
        case "ROOM_FOOD":
            return {...state, food:action.detail}
        case "ROOM_AUTO":
            return {...state, auto:action.detail}
        case "ROOM_RECUR":
            return {...state, recur:action.detail}

        case "ROOM_START":
            return {...state, start:action.detail}
        case "ROOM_END":
            return {...state, end:action.detail}

        case "ROOM_RULE":
            let rules = state.addRule;
            rules.push(action.detail);
            return {...state, addRule:rules}
        default:
            return state
    }
}

// After creating a reducer, add it to the comma separated list below
// This allows you to access all reducers in this file as one object in other files
export default combineReducers({
    fakeReducer, roomInput
})
