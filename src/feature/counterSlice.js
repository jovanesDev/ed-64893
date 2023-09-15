import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     count:0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementar:(state) => {
        state.count = state.count + 1
    },
    decrementar:(state) => {
        if(state.count < 1){
            return;
        }
        state.count = state.count - 1
    },
    reset:(state) => {
        state.count = 0
    },
    setDefaultValue:(state,action) => {
        state.count = action.payload
    }
  }
});

export const {incrementar,decrementar,reset,setDefaultValue} = counterSlice.actions

export default counterSlice.reducer