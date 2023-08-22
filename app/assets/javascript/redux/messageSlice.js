import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchrandommessage=createAsyncThunk(
    'Greeting/random-Greeting',async (_, thunkAPI) => {
      try
      {
               const response = await axios.get('http://localhost:3000/random_message')
        const data = await response.data
        return data
      }
      catch(error)
      {
        return thunkAPI.rejectWithValue('Failed to fetch a random message')
      }
    }
)

const initialState={
    randomMessage :null,
    loading:false,
    error:null,
}

const randomMessageSlice =createSlice({
    name:"randomMessage",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(fetchrandommessage.pending,(state)=>{
            state.loading = true,
            state.error = null
            
        })
        .addCase(fetchrandommessage.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        .addCase(fetchrandommessage.fulfilled,(state,action)=>{
            state.loading = false,
            state.randomMessage = action.payload
        })
    }
})

export default randomMessageSlice.reducer;
