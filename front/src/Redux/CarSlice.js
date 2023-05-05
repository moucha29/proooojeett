import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const AddingCars = createAsyncThunk('car/AddingCars', async(newCar,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/cars/Car',newCar)
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }
})
export const GetAllCars = createAsyncThunk('car/GetAllCars', async(_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('/api/cars/')
        return data
    } catch (error) {
        rejectWithValue(error.response.data.message)
    }
})

const CarSlice = createSlice({
    name:'car',
    initialState:{
        isLoading:false,
        cars:[],
        Errors: null
    },

    extraReducers:{
        [AddingCars.pending]: (state)=>{
            state.isLoading = true
        },
        [AddingCars.fulfilled]: (state)=>{
            state.isLoading = false
        },
        [AddingCars.rejected]: (state,{type,payload})=>{
            state.Errors = payload
        },
        [GetAllCars.pending]: (state)=>{
            state.isLoading = true
        },
        [GetAllCars.fulfilled]: (state,{type,payload})=>{
            state.isLoading = false
            state.cars = payload
        },
        [GetAllCars.rejected]: (state,{type,payload})=>{
            state.Errors = payload
        }

    }
})

export default CarSlice.reducer