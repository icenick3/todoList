import React from 'react';
import {useSelector} from "react-redux";

import Tasks from "../Tasks/Tasks";
import './TodoList.css'

const TodoList = ({tasks, getId , getIdForUpdate}) => {

    const {email} = useSelector(state => state.user)

    return (
        <div className={'todoList'}>
            {email &&<Tasks tasks={tasks} getId={getId} getIdForUpdate={getIdForUpdate}/>}
        </div>
    );
};

export default TodoList;