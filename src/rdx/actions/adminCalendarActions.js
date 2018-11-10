// A fake action I made as an example
//.Export each function individually
// Define the inputs to the action
// (in this case, just a time value)
// Type allows the action to match up with the corresponding reducer
export const FAKE_set_start_time = (hour) => ({
    type: "SET_START",
    time: hour
});

export const roomDetails = (event) => {
    // You could do computations here if needed
    // Suppose time values were offset by 2 for some reason:
    let inputType;
    switch (event.target.name) {
        case "roomNameInput":
            inputType = "ROOM_NAME";
        case "roomCapacityInput":
            inputType = "ROOM_CAPACITY";
        case "roomMaxDurationInput":
            inputType = "ROOM_DUR";
        case "weeksInAdvanceInput":
            inputType = "ROOM_WEEKS";

    }
    return ({
        type: inputType,
        detail: event.target.value
    })
};

