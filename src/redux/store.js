import {configureStore} from '@reduxjs/toolkit'
import countReducer from './countReducer'


const store = configureStore({
    reducer:{
        counter:countReducer
    }
})

export default store;