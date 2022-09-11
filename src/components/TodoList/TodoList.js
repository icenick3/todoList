import React from 'react';
import Tasks from "../Tasks/Tasks";
import {useSelector} from "react-redux";

const TodoList = ({tasks}) => {
    const user = useSelector(state => state.user)

    return (
        <div>
            {user.email &&<Tasks tasks={tasks}/>}
        </div>
    );
};

export default TodoList;