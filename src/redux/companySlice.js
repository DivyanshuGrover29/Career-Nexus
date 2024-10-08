import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        companies:[]
    },
    reducers:{
        // actions
        setCompanies:(state,action) => {
            state.companies = action.payload;
        }
    }
})
export const { setCompanies} = companySlice.actions;
export default companySlice.reducer;