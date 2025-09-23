import { createSlice } from "@reduxjs/toolkit";

createSlice({
   name:"auth" ,
   initialState:{
    token:null,
    userDate:null,
   },
   reducers{
    clearData:function(state,action){
     state.token:null,
    state.userDate:null,  
    }

     
   },
   extraReducers:(builder) => {}
  
})
