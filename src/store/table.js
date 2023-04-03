
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    error : null,
    loading : false,
    show : false,
    log : false,
}

const tableSlice = createSlice ({
    name : 'table',
    initialState : initialState,
    reducers : {
        setData(state ,action) {
          state.data = action.payload;
        },
        setError(state ,action) {
            state.error = action.payload;
        },
        isLoading (state,action) {
            state.loading = true;
        },
        notLoading (state,action) {
            state.loading = false;
        },
        isShow (state,action) {
            state.show = true;
        },
        notShow (state,action) {
            state.show = false;
        },
        setLog(state)  {
            state.log = !state.log;
        }
        
    }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;