import React from 'react';
import {useSelector} from "react-redux";

import Task from "../Task/Task";

const Tasks = ({getId, getIdForUpdate}) => {

const {task} = useSelector(state => state.task)
    return (
        <div>
            {task.map(task => <Task key={task.id} task={task} getId={getId} getIdForUpdate={getIdForUpdate}/>)}
        </div>
    );
};

export default Tasks;