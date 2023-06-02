import { createSlice } from '@reduxjs/toolkit'
export const counterSlice =createSlice({
    name:"counter",
    initialState:{
        countr:0
    },
    reducers:{
        nextInfo:(state)=>{
            state.countr+=1;
        },
        resetInfo:(state)=>{
            state.countr=0;
        }
    }
})
export const counterActions = counterSlice.actions;
export default counterSlice;