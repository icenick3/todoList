import React from 'react';
import {useSelector} from "react-redux";

import Tasks from "../Tasks/Tasks";
import './TodoList.css'
import MessageForNonLogin from "../MessageForNon-login/MessageForNon-login";

const TodoList = ({status, tasks, getId , getIdForUpdate, getStatus}) => {

    const {email} = useSelector(state => state.user)

    return (
        <div className={'todoList'}>
            {email &&<Tasks tasks={tasks} getId={getId} getIdForUpdate={getIdForUpdate} status={status} getStatus={getStatus}/>}
            {!email &&<MessageForNonLogin/>}
        </div>
    );
};

export default TodoList;