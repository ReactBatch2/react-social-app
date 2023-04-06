import { createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id:'u-1',name : 'Kyaw Aung'},
    {id:'u-2',name : 'Zaw Zaw'},
    {id:'u-3',name : 'Hein Ye'},
    {id:'u-4',name : 'Ma Sapal'},
    {id:'u-5',name : 'Kaung Htet'},
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = state => state.users
export const getUserById = (state,userId) => state.users.find(user => user.id === userId)
export default userSlice.reducer