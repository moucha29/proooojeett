import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const Registering = createAsyncThunk('user/register', async (newUser,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('/api/users/register',newUser)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }
})

export const login = createAsyncThunk('user/login', async (user,{rejectWithValue})=>{
    try {
        //dispatch(clearErrors())
        const {data} = await axios.post('/api/users/login',user)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }
})

const UserSlice = createSlice({
    name:'user',
    initialState:{
        isLoading: false,
        isAuth: Boolean(localStorage.getItem('isAuth')),
        user : JSON.parse(localStorage.getItem('user')),
        token : localStorage.getItem('token'),
        RegisterErrors: null,
        LoginErrors : null,
        msg:null
    },


    reducers:{

        logOut : (state)=>{
            state.user = {}
            state.isAuth = false
            state.token = null
            localStorage.clear()
        },


        clearErrors : (state)=>{
            state.LoginErrors= null
            state.RegisterErrors = null
          }
      },


    
    extraReducers:{
        [Registering.pending]: (state)=>{
            state.isLoading = true
        },
        [Registering.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
        },
        [Registering.rejected] : (state,{type,payload})=>{
            state.RegisterErrors = payload
        },
        [login.pending]: (state)=>{
            state.isLoading = true
        },
        [login.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.user = payload.isfound
            state.token= payload.token
            state.isAuth = true
            localStorage.setItem('token', payload.token )
            localStorage.setItem('user', JSON.stringify(payload.isfound) )
            localStorage.setItem('isAuth', true)
        },
        [login.rejected] : (state,{type,payload})=>{
            state.LoginErrors = payload
        }
    }
}) 

export default UserSlice.reducer
export const  {logOut,clearErrors} = UserSlice.actions
