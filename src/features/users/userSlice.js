import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const GET_URL = 'https://jsonplaceholder.typicode.com/users'

export const getAllUsers = createAsyncThunk('users/getAllUsers',async ()=>{
    const response = await axios.get(GET_URL)
    return [...response.data]
})

const initialState = [
    // {id:'u-1',name : 'Kyaw Aung'},
    // {id:'u-2',name : 'Zaw Zaw'},
    // {id:'u-3',name : 'Hein Ye'},
    // {id:'u-4',name : 'Ma Sapal'},
    // {id:'u-5',name : 'Kaung Htet'},
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getAllUsers.fulfilled,(state,action) => {
            return action.payload
        })
    }
       
})

export const selectAllUsers = state => state.users
export const getUserById = (state,userId) => state.users.find(user => user.id === userId)
export default userSlice.reducer