import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {email: null, id: null, token: null},
    reducers: {
        setUser:(state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser:(state)=>{
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer