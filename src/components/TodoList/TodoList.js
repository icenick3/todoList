import React from 'react';
import Tasks from "../Tasks/Tasks";
import {useSelector} from "react-redux";

const TodoList = ({tasks, getId , getIdForUpdate}) => {
    const user = useSelector(state => state.user)

    return (
        <div>
            {user.email &&<Tasks tasks={tasks} getId={getId} getIdForUpdate={getIdForUpdate}/>}
        </div>
    );
};

export default TodoList;