import React, {useEffect, useState} from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";

const Tasks = ({tasks, getId, getIdForUpdate}) => {

const task = useSelector(state => state.task)
    console.log(task)
    const takeId = (id) => {
        getId(id)
    }




    return (
        <div>
            {tasks.map(task => <Task task={task} takeId={takeId} getIdForUpdate={getIdForUpdate}/>)}
        </div>
    );
};

export default Tasks;