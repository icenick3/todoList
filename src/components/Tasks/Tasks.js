import React from 'react';
import {useSelector} from "react-redux";

import Task from "../Task/Task";

const Tasks = ({status, getId, getIdForUpdate, getStatus}) => {

const {task} = useSelector(state => state.task)
    return (
        <div>
            {task.map(task => <Task key={task.id} task={task} getId={getId} getIdForUpdate={getIdForUpdate} status={status} getStatus={getStatus}/>)}
        </div>
    );
};

export default Tasks;