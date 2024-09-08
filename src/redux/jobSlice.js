import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],//empty array rkh skte ya null kuch bhi likh skte
        singleJob:null,
        allAppliedJobs:[],
        searchedQuery:"",//This is for searching in hero section and carousel
    },
    reducers:{
        // actions
        setAllJobs:(state,action) => {
            state.allJobs = action.payload;
        },

        setSingleJob:(state,action) => {
            state.singleJob = action.payload;
        },
        
        setAllAppliedJobs:(state,action) => {
            state.allAppliedJobs = action.payload;
        },

        setSearchedQuery:(state,action)=> {
            state.searchedQuery = action.payload;
        }
    }
});

export const {setAllJobs, setSingleJob , setAllAppliedJobs , setSearchedQuery} = jobSlice.actions;
export default jobSlice.reducer;