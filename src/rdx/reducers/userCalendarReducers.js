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

// After creating a reducer, add it to the comma separated list below
// This allows you to access all reducers in this file as one object in other files
export default combineReducers({
    fakeReducer, reducer1, reducer2
})
