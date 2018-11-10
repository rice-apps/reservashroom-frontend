// A fake action I made as an example
//.Export each function individually
// Define the inputs to the action
// (in this case, just a time value)
// Type allows the action to match up with the corresponding reducer
export const FAKE_set_start_time = (hour) => ({
    type: "SET_START",
    time: hour
});

