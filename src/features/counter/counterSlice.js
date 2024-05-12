import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// define the type of our state
interface CounterState {
    value: number;
}


// define the initial value for our state
const initialState: CounterState = {
    value: 0
};

// define the slice that contains the reducer logic
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment
        incremented(state) {
            state.value++;
        }
    }
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;