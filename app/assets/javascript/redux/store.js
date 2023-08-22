import { configureStore } from "@reduxjs/toolkit";
import {randomMessageReducer} from './messageSlice'

const store = configureStore({
    reducer:{
        randomMessage: randomMessageReducer,}
})

export default store