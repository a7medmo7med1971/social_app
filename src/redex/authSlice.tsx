import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const handelLogin= createAsyncThunk("auth/login",async function(value:{email: string; password: string}){
 return await axios.post('https://linked-posts.routemisr.com/users/signin',value)
})


const authinication =createSlice({
   name:"auth" ,
   initialState:{
    token:null,
    userData:null,
   },
   reducers:{
    clearData:function(state,action){
     state.token=null
    state.userData=null  
    }

   },
   extraReducers:(builder) => {
      builder.addCase(handelLogin.fulfilled,function(state,action){
         console.log(action.payload)
      })
      builder.addCase(handelLogin.rejected,function(state,action){
         console.log(action.payload)
      })
      builder.addCase(handelLogin.pending,function(state,action){
         console.log(action.payload)
      })
   }
  
})
export const authiniCation= authinication.reducer