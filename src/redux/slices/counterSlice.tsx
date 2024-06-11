import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}
export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const {increment,
            decrement,
            increaseByAmount,
            reset}
            = counterSlice.actions