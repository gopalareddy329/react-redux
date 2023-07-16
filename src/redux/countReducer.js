import { createSlice } from "@reduxjs/toolkit";

const counter={counter:5}

const counterSlice = createSlice({
    name:'counter',
    initialState:counter,
    reducers:{
        increase(state){
            state.counter +=1
        },
        decrease(state){
            state.counter -=1
        },
        increasebyvalue(state,action){
            state.counter +=parseInt(action.payload);
        }
    }
});

export const {increase,decrease,increasebyvalue} = counterSlice.actions;
export default counterSlice.reducer;