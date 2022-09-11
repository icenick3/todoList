import React, {useEffect, useState} from 'react';
import Task from "../Task/Task";

const Tasks = ({tasks}) => {

    const [id, setId] = useState(null)
    const [filteredTask, setFilteredTasks] = useState(tasks)
    console.log(tasks)

    const
    takeId = (id) => {
        setId(id)
    }

    useEffect(() => {
        setFilteredTasks(filteredTask.filter(task => task.id !== id))
    }, [id])
    console.log(filteredTask)
    return (
        <div>
            {tasks.map(task => <Task task={task} takeId={takeId}/>)}
        </div>
    );
};

export default Tasks;