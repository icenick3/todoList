import {createSlice} from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: []
    },
    reducers: {
        setTask: (state, action) => {
            state.task = action.payload
            state.task.sort((a, b) => {
                if (a.time > b.name) {
                    return 1;
                }
                if (a.time < b.time) {
                    return -1;
                }
                return 0
            })
        }
    }
})

export const {setTask, removeTask, changeTask} = taskSlice.actions
const taskReducer = taskSlice.reducer
export default taskReducer