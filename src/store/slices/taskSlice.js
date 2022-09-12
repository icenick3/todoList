import {createSlice} from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: [],
    },
    reducers: {
        setTask: (state, action) => {
        },
        removeTask: (state) => {

        }
    }
})

export const {setTask, removeTask} = taskSlice.actions
const taskReducer = taskSlice.reducer
export default taskReducer